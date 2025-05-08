
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";
import { toast } from "sonner";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === product.id);
        
        if (existingItemIndex !== -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += 1;
          
          set({ items: updatedItems });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },
      
      removeItem: (id: string) => {
        set({ items: get().items.filter(item => item.id !== id) });
        toast.success("Item removed from cart");
      },
      
      updateItemQuantity: (id: string, quantity: number) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === id);
        
        if (existingItemIndex !== -1) {
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity = quantity;
          
          set({ items: updatedItems.filter(item => item.quantity > 0) });
        }
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.isOnSale && item.salePrice ? item.salePrice : item.price;
          return total + (price * item.quantity);
        }, 0);
      }
    }),
    {
      name: "velocita-cart",
    }
  )
);

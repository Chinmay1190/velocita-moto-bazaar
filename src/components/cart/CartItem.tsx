
import { CartItem as CartItemType } from "@/hooks/use-cart";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart();
  
  const price = item.isOnSale && item.salePrice ? item.salePrice : item.price;
  const totalPrice = price * item.quantity;
  
  const handleDecrement = () => {
    updateItemQuantity(item.id, item.quantity - 1);
  };
  
  const handleIncrement = () => {
    if (item.quantity < item.stock) {
      updateItemQuantity(item.id, item.quantity + 1);
    }
  };
  
  const handleRemove = () => {
    removeItem(item.id);
  };
  
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between">
          <Link to={`/product/${item.id}`}>
            <h3 className="font-medium hover:text-primary transition-colors">{item.name}</h3>
          </Link>
          <Button variant="ghost" size="icon" onClick={handleRemove}>
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {item.brand}
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            
            <span className="w-8 text-center">{item.quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleIncrement}
              disabled={item.quantity >= item.stock}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          
          <div>
            <span className="font-medium">{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function CartSummary() {
  const { items, getTotalPrice } = useCart();
  const navigate = useNavigate();
  
  const subtotal = getTotalPrice();
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;
  
  const handleCheckout = () => {
    if (items.length > 0) {
      navigate("/checkout");
    }
  };
  
  return (
    <div className="bg-card rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
        </div>
        
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4" 
          disabled={items.length === 0}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

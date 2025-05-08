
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { useCart } from "@/hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  
  // Redirect to cart if no items are in the cart
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="max-w-3xl mx-auto bg-card rounded-lg border p-6">
            <CheckoutForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

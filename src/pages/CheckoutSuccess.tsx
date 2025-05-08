
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CheckoutSuccess = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-16 px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 dark:bg-green-900"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
            >
              <Check className="h-10 w-10 text-green-600 dark:text-green-300" />
            </motion.div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            
            <div className="bg-card border rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Information</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Order Number:</span>
                  <span>{orderNumber}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span className="font-medium">Payment Status:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">Paid</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">Continue Shopping</Link>
              </Button>
              
              <Button variant="outline" asChild size="lg">
                <Link to="/all-products">View All Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;

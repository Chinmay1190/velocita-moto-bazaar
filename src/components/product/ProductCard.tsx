
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="product-card group"
    >
      {product.isNew && (
        <span className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          New
        </span>
      )}
      
      {product.isOnSale && (
        <span className="absolute top-2 right-2 z-10 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          Sale
        </span>
      )}

      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden h-48">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="product-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">{product.brand}</span>
            <div className="flex items-center">
              <span className="text-sm font-medium">
                {product.rating}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
          
          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.isOnSale ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(product.salePrice!)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            <span className="text-xs text-muted-foreground">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4 pt-0 flex items-center gap-2">
        <Button 
          variant="default" 
          size="sm" 
          className="w-full gap-1"
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        
        <Button variant="outline" size="icon" className="shrink-0">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to Wishlist</span>
        </Button>
      </div>
    </motion.div>
  );
}

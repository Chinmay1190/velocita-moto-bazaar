
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProductById, formatPrice, getRelatedProducts } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Check, Minus, Plus, Star, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotFound } from "./NotFound";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  
  if (!product) {
    return <NotFound />;
  }
  
  const relatedProducts = getRelatedProducts(product.category, product.id);
  
  const handleAddToCart = () => {
    // Add the selected quantity of the product to cart
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 px-4">
          <nav className="flex mb-8 items-center text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to={`/category/${product.category}`} className="text-muted-foreground hover:text-foreground capitalize">
              {product.category}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
          
          <Link to={`/category/${product.category}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to {product.category}</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div 
                className="overflow-hidden rounded-lg bg-muted h-[400px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-md h-24 border-2 transition-colors ${
                      selectedImage === index 
                        ? "border-primary" 
                        : "border-transparent hover:border-muted-foreground"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-1">
                  {product.brand}
                </div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                {product.isOnSale ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.salePrice!)}
                    </span>
                    <span className="text-base text-muted-foreground line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                      Sale
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Colors Available:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span 
                      key={color} 
                      className="px-3 py-1 bg-muted rounded-md text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Availability:</h3>
                {product.stock > 0 ? (
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    <span>In Stock ({product.stock} available)</span>
                  </div>
                ) : (
                  <span className="text-destructive">Out of Stock</span>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="h-10"
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    
                    <span className="w-12 text-center">{quantity}</span>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="h-10"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button 
                    className="flex-1 gap-2"
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to Wishlist</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="specifications">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b py-2">
                      <span className="font-medium w-1/3 capitalize">
                        {key.replace('_', ' ')}:
                      </span>
                      <span className="w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="py-4">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="reviews" className="py-4">
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <div className="flex justify-center items-center gap-2 my-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span>Based on {product.reviews} reviews</span>
                  </div>
                  <Button>Write a Review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <ProductGrid 
                products={relatedProducts}
                title="You might also like"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

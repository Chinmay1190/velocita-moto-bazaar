
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory, products } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { NotFound } from "./NotFound";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const categories = ["sport", "cruiser", "adventure", "street"];
  
  if (!categoryName || !categories.includes(categoryName)) {
    return <NotFound />;
  }
  
  const categoryProducts = getProductsByCategory(categoryName);

  const getCategoryTitle = () => {
    switch (categoryName) {
      case "sport":
        return "Sport Bikes";
      case "cruiser":
        return "Cruiser Bikes";
      case "adventure":
        return "Adventure Bikes";
      case "street":
        return "Street Bikes";
      default:
        return "Products";
    }
  };
  
  const getCategoryDescription = () => {
    switch (categoryName) {
      case "sport":
        return "Experience the adrenaline rush with our high-performance sport bikes designed for speed enthusiasts and racing professionals.";
      case "cruiser":
        return "Enjoy the journey with comfort and style on our premium cruiser motorcycles, perfect for long rides and ultimate relaxation.";
      case "adventure":
        return "Conquer any terrain with our versatile adventure motorcycles, built to take you beyond the conventional roads.";
      case "street":
        return "Dominate the urban landscape with agile and stylish street bikes that blend performance with everyday practicality.";
      default:
        return "";
    }
  };
  
  const getCategoryBanner = () => {
    switch (categoryName) {
      case "sport":
        return "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop";
      case "cruiser":
        return "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop";
      case "adventure":
        return "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop";
      case "street":
        return "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop";
      default:
        return "";
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div 
          className="h-[30vh] md:h-[40vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${getCategoryBanner()})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container h-full flex items-center justify-center relative z-10">
            <motion.div 
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{getCategoryTitle()}</h1>
              <p className="max-w-2xl mx-auto">{getCategoryDescription()}</p>
            </motion.div>
          </div>
        </div>
        
        <div className="container py-8 px-4">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">No products found</h2>
              <p className="text-muted-foreground mb-8">We couldn't find any products in this category.</p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;

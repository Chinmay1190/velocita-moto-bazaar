
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getNewProducts, getOnSaleProducts, products } from "@/data/products";
import { motion } from "framer-motion";

const Index = () => {
  const newProducts = getNewProducts();
  const saleProducts = getOnSaleProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4">
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Welcome to Velocita Moto Bazaar</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Premium superbike destination offering the finest selection of high-performance motorcycles in India
              </p>
            </div>
          </motion.section>
          
          {newProducts.length > 0 && (
            <ProductGrid products={newProducts} title="New Arrivals" />
          )}
          
          <FeaturedCategories />
          
          {saleProducts.length > 0 && (
            <ProductGrid products={saleProducts} title="Special Offers" />
          )}
          
          <ProductGrid products={featuredProducts} title="Featured Bikes" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

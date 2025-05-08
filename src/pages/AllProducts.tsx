
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const AllProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000000]);
  
  // Get unique categories and brands
  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];
  const brands = ["all", ...Array.from(new Set(products.map((p) => p.brand)))];
  
  // Find min and max prices
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.category === categoryFilter);
    }
    
    // Filter by brand
    if (brandFilter !== "all") {
      result = result.filter((p) => p.brand === brandFilter);
    }
    
    // Filter by price range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [searchTerm, categoryFilter, brandFilter, priceRange]);
  
  const handleReset = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setBrandFilter("all");
    setPriceRange([minPrice, maxPrice]);
  };
  
  const formatPriceLabel = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">All Bikes</h1>
            <p className="text-muted-foreground">
              Explore our extensive collection of premium superbikes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <motion.aside
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-medium mb-4">Search</h2>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search bikes..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-medium mb-4">Categories</h2>
                <Select
                  value={categoryFilter}
                  onValueChange={(value) => setCategoryFilter(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-medium mb-4">Brands</h2>
                <Select
                  value={brandFilter}
                  onValueChange={(value) => setBrandFilter(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand === "all" ? "All Brands" : brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-card rounded-lg border p-4">
                <h2 className="font-medium mb-4">Price Range</h2>
                <Slider
                  defaultValue={[minPrice, maxPrice]}
                  min={minPrice}
                  max={maxPrice}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as number[])}
                  className="mb-6"
                />
                <div className="flex justify-between text-sm">
                  <span>{formatPriceLabel(priceRange[0])}</span>
                  <span>{formatPriceLabel(priceRange[1])}</span>
                </div>
              </div>
              
              <Button onClick={handleReset} variant="outline" className="w-full">
                Reset Filters
              </Button>
            </motion.aside>
            
            {/* Products grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold mb-4">No products found</h2>
                  <p className="text-muted-foreground mb-8">
                    Try adjusting your filters or search term
                  </p>
                  <Button onClick={handleReset}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;

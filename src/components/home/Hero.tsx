
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1558980394-dbb977039a2e?q=80&w=2070&auto=format&fit=crop",
    title: "Experience the Thrill of Speed",
    subtitle: "Premium Superbikes for Racing Enthusiasts",
    cta: "Shop Sport Bikes",
    link: "/category/sport"
  },
  {
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    title: "The Ultimate Cruising Experience",
    subtitle: "Elegance Meets Performance",
    cta: "Explore Cruisers",
    link: "/category/cruiser"
  },
  {
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
    title: "Adventure Awaits",
    subtitle: "Go Beyond the Beaten Path",
    cta: "Discover Adventure Bikes",
    link: "/category/adventure"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
      <AnimatePresence>
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay" />
              </div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container px-4 md:px-6 mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-lg"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-6">
                      {slide.subtitle}
                    </p>
                    <Button asChild size="lg" className="gap-2">
                      <Link to={slide.link}>
                        {slide.cta}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

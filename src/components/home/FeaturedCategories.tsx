
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Sport Bikes",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
    description: "Experience the adrenaline rush with our high-performance sport bikes",
    path: "/category/sport"
  },
  {
    name: "Cruiser Bikes",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
    description: "Enjoy the journey with comfort and style on our premium cruisers",
    path: "/category/cruiser"
  },
  {
    name: "Adventure Bikes",
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
    description: "Conquer any terrain with our versatile adventure motorcycles",
    path: "/category/adventure"
  },
  {
    name: "Street Bikes",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
    description: "Dominate the urban landscape with agile and stylish street bikes",
    path: "/category/street"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function FeaturedCategories() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Explore Our Collection
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.name}
              variants={itemVariants}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                <Link 
                  to={category.path}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Explore
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
                    className="w-4 h-4 ml-2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

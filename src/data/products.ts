
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  colors: string[];
  description: string;
  specifications: Record<string, string | number>;
  features: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
  stock: number;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "sport",
    price: 1599999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["green", "black", "blue"],
    description: "The Ninja ZX-10R is Kawasaki's flagship superbike, designed for both track and street use. With technology derived directly from World Superbike Championship racing, it delivers exceptional performance and handling.",
    specifications: {
      engine: "998cc, In-Line Four, Liquid-Cooled",
      power: "203 HP",
      torque: "114.9 Nm",
      weight: "207 kg",
      seat_height: "835 mm",
      fuel_capacity: "17 liters",
      transmission: "6-Speed"
    },
    features: [
      "IMU-Enhanced Electronics",
      "Showa Balance Free Front Fork",
      "Brembo Monobloc Calipers",
      "Launch Control Mode",
      "Cornering Management",
      "Lightweight Chassis",
      "Aerodynamic Winglets"
    ],
    isNew: true,
    stock: 5,
    rating: 4.9,
    reviews: 28
  },
  {
    id: "2",
    name: "Panigale V4",
    brand: "Ducati",
    category: "sport",
    price: 2399999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black"],
    description: "The Ducati Panigale V4 represents the pinnacle of Italian sportbike engineering, with MotoGP-derived technology and breathtaking performance. Its V4 engine delivers an intoxicating sound and incredible power.",
    specifications: {
      engine: "1103cc, V4 Desmosedici Stradale, Liquid-Cooled",
      power: "214 HP",
      torque: "124 Nm",
      weight: "198 kg",
      seat_height: "835 mm",
      fuel_capacity: "16 liters",
      transmission: "6-Speed"
    },
    features: [
      "Öhlins Electronic Suspension",
      "Ducati Power Launch",
      "Ducati Traction Control EVO 3",
      "Cornering ABS EVO",
      "Biplane Aero Winglets",
      "Akrapovič Titanium Exhaust",
      "TFT Display"
    ],
    stock: 3,
    rating: 4.9,
    reviews: 19
  },
  {
    id: "3",
    name: "GSX-R1000R",
    brand: "Suzuki",
    category: "sport",
    price: 1899999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "white"],
    description: "The Suzuki GSX-R1000R continues the legacy of the GSX-R line with advanced technology and track-focused performance. Designed with MotoGP expertise, it offers precision handling and exhilarating acceleration.",
    specifications: {
      engine: "999.8cc, Inline-Four, Liquid-Cooled",
      power: "202 HP",
      torque: "117.6 Nm",
      weight: "203 kg",
      seat_height: "825 mm",
      fuel_capacity: "16 liters",
      transmission: "6-Speed"
    },
    features: [
      "Variable Valve Timing",
      "Bi-directional Quickshifter",
      "Motion Track TCS",
      "Showa Balance Free Suspension",
      "Launch Control System",
      "Cornering ABS",
      "LCD Instrument Panel"
    ],
    stock: 7,
    rating: 4.7,
    reviews: 23
  },
  {
    id: "4",
    name: "YZF-R1",
    brand: "Yamaha",
    category: "sport",
    price: 1999999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "red"],
    description: "The Yamaha YZF-R1 is a masterpiece of motorcycle engineering with MotoGP DNA. Its crossplane engine delivers exceptional character and performance, while advanced electronics provide precise control.",
    specifications: {
      engine: "998cc, Crossplane Inline-Four, Liquid-Cooled",
      power: "200 HP",
      torque: "113.3 Nm",
      weight: "201 kg",
      seat_height: "855 mm",
      fuel_capacity: "17 liters",
      transmission: "6-Speed"
    },
    features: [
      "Crossplane Crankshaft",
      "Six-Axis IMU",
      "Lift Control System",
      "Quickshifter System",
      "Racing-derived Brake System",
      "Öhlins Electronic Racing Suspension",
      "TFT Instrument Display"
    ],
    stock: 4,
    rating: 4.8,
    reviews: 31
  },
  {
    id: "5",
    name: "S 1000 RR",
    brand: "BMW",
    category: "sport",
    price: 2199999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "blue", "white"],
    description: "The BMW S 1000 RR redefined the superbike segment with its combination of power, precision, and technology. German engineering meets racing performance in this iconic motorcycle.",
    specifications: {
      engine: "999cc, Inline-Four, Liquid-Cooled",
      power: "207 HP",
      torque: "113 Nm",
      weight: "197 kg",
      seat_height: "824 mm",
      fuel_capacity: "16.5 liters",
      transmission: "6-Speed"
    },
    features: [
      "ShiftCam Technology",
      "Dynamic Traction Control",
      "Adjustable Hill Start Control",
      "Dynamic Brake Control",
      "LED Lighting",
      "M Carbon Wheels",
      "6.5-inch TFT Display"
    ],
    isOnSale: true,
    salePrice: 1999999,
    stock: 2,
    rating: 4.9,
    reviews: 24
  },
  {
    id: "6",
    name: "Fireblade CBR1000RR-R",
    brand: "Honda",
    category: "sport",
    price: 2349999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["red", "black", "tricolor"],
    description: "The Honda CBR1000RR-R Fireblade represents the pinnacle of Honda's engineering prowess. Developed with technology from MotoGP, it offers uncompromising performance with Honda's legendary reliability.",
    specifications: {
      engine: "1000cc, Inline-Four, Liquid-Cooled",
      power: "217 HP",
      torque: "113 Nm",
      weight: "201 kg",
      seat_height: "831 mm",
      fuel_capacity: "16.1 liters",
      transmission: "6-Speed"
    },
    features: [
      "Titanium Connecting Rods",
      "Öhlins Semi-Active Suspension",
      "Brembo Stylema Brake Calipers",
      "Honda Electronic Steering Damper",
      "Aerodynamic Winglets",
      "Launch Control",
      "TFT Display"
    ],
    isNew: true,
    stock: 1,
    rating: 4.9,
    reviews: 16
  },
  {
    id: "7",
    name: "Hayabusa",
    brand: "Suzuki",
    category: "sport",
    price: 1649999,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black-gold", "white-silver", "black-red"],
    description: "The legendary Suzuki Hayabusa, known for its ultimate speed and distinctive styling. The third-generation model features refined aerodynamics, improved electronics, and the iconic silhouette that made it famous.",
    specifications: {
      engine: "1340cc, Inline-Four, Liquid-Cooled",
      power: "190 HP",
      torque: "150 Nm",
      weight: "264 kg",
      seat_height: "800 mm",
      fuel_capacity: "20 liters",
      transmission: "6-Speed"
    },
    features: [
      "Suzuki Drive Mode Selector",
      "Motion Track Traction Control",
      "Bi-directional Quickshifter",
      "Launch Control System",
      "Brembo Stylema Calipers",
      "Cruise Control",
      "TFT LCD Instrument"
    ],
    stock: 6,
    rating: 4.8,
    reviews: 42
  },
  {
    id: "8",
    name: "Fat Boy 114",
    brand: "Harley-Davidson",
    category: "cruiser",
    price: 2045000,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["vivid black", "gray denim", "deadwood green"],
    description: "The iconic Harley-Davidson Fat Boy combines muscular looks with the rumbling Milwaukee-Eight engine. Its solid aluminum disc wheels and wide stance create an unmistakable road presence.",
    specifications: {
      engine: "1868cc, Milwaukee-Eight 114 V-Twin",
      power: "93 HP",
      torque: "155 Nm",
      weight: "317 kg",
      seat_height: "675 mm",
      fuel_capacity: "18.9 liters",
      transmission: "6-Speed"
    },
    features: [
      "Solid Aluminum Disc Wheels",
      "Softail Frame",
      "LED Lighting",
      "ABS Braking",
      "Keyless Ignition",
      "Cruise Control",
      "Digital Instrumentation"
    ],
    stock: 3,
    rating: 4.7,
    reviews: 32
  },
  {
    id: "9",
    name: "Street Triple RS",
    brand: "Triumph",
    category: "street",
    price: 1150000,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["matt silver ice", "sapphire black", "crystal white"],
    description: "The Triumph Street Triple RS combines aggressive styling with an exhilarating triple-cylinder engine. Offering superbike-level handling in a street-friendly package, it's the ultimate everyday sport bike.",
    specifications: {
      engine: "765cc, Inline Triple, Liquid-Cooled",
      power: "123 HP",
      torque: "79 Nm",
      weight: "166 kg",
      seat_height: "825 mm",
      fuel_capacity: "17.4 liters",
      transmission: "6-Speed"
    },
    features: [
      "Brembo M50 Monobloc Calipers",
      "Öhlins STX40 Rear Suspension",
      "Showa Big Piston Forks",
      "Five Riding Modes",
      "Quickshifter",
      "TFT Display",
      "Adjustable ABS"
    ],
    stock: 7,
    rating: 4.8,
    reviews: 29
  },
  {
    id: "10",
    name: "R 1250 GS Adventure",
    brand: "BMW",
    category: "adventure",
    price: 2199000,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["ice grey", "triple black", "rallye"],
    description: "The BMW R 1250 GS Adventure is the ultimate long-distance travel enduro. With its robust construction, sophisticated technology, and legendary reliability, it's ready to take you anywhere in the world.",
    specifications: {
      engine: "1254cc, Boxer Twin, ShiftCam Technology",
      power: "136 HP",
      torque: "143 Nm",
      weight: "268 kg",
      seat_height: "850-870 mm",
      fuel_capacity: "30 liters",
      transmission: "6-Speed"
    },
    features: [
      "Adaptive Headlight",
      "Dynamic ESA",
      "Ride Modes Pro",
      "Hillstart Control Pro",
      "TFT Display",
      "Keyless Ride",
      "Heated Grips"
    ],
    stock: 4,
    rating: 4.9,
    reviews: 36
  }
];

// Generate 40 more products to meet the 50+ requirement
for (let i = 11; i <= 50; i++) {
  const categories = ["sport", "cruiser", "adventure", "street"];
  const brands = ["BMW", "Ducati", "Harley-Davidson", "Honda", "Kawasaki", "Suzuki", "Triumph", "Yamaha"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomBrand = brands[Math.floor(Math.random() * brands.length)];
  
  const randomPrice = Math.floor(Math.random() * 1500000) + 500000; // Between 5 lakh and 20 lakh
  const isOnSale = Math.random() > 0.8;
  const salePrice = isOnSale ? Math.floor(randomPrice * 0.9) : undefined;
  const isNew = Math.random() > 0.9;
  
  products.push({
    id: i.toString(),
    name: `${randomBrand} ${randomCategory.charAt(0).toUpperCase() + randomCategory.slice(1)} ${Math.floor(Math.random() * 1000)}`,
    brand: randomBrand,
    category: randomCategory,
    price: randomPrice,
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
    ],
    colors: ["black", "red", "blue"],
    description: `Premium ${randomCategory} motorcycle from ${randomBrand}. Features advanced technology and exceptional performance.`,
    specifications: {
      engine: Math.random() > 0.5 ? `${Math.floor(Math.random() * 600) + 600}cc, Inline-Four, Liquid-Cooled` : `${Math.floor(Math.random() * 600) + 600}cc, V-Twin, Air-Cooled`,
      power: `${Math.floor(Math.random() * 100) + 70} HP`,
      torque: `${Math.floor(Math.random() * 50) + 70} Nm`,
      weight: `${Math.floor(Math.random() * 100) + 180} kg`,
      seat_height: `${Math.floor(Math.random() * 150) + 750} mm`,
      fuel_capacity: `${Math.floor(Math.random() * 10) + 12} liters`,
      transmission: "6-Speed"
    },
    features: [
      "Electronic Suspension",
      "ABS Braking",
      "Riding Modes",
      "LED Lighting",
      "Digital Display"
    ],
    isOnSale: isOnSale,
    salePrice: salePrice,
    isNew: isNew,
    stock: Math.floor(Math.random() * 10) + 1,
    rating: Math.floor(Math.random() * 10 + 35) / 10,
    reviews: Math.floor(Math.random() * 40) + 5
  });
}

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.isOnSale);
};

export const getRelatedProducts = (categoryName: string, currentProductId: string): Product[] => {
  return products
    .filter(product => product.category === categoryName && product.id !== currentProductId)
    .slice(0, 4);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', { 
    style: 'currency', 
    currency: 'INR',
    maximumFractionDigits: 0 
  }).format(price);
};

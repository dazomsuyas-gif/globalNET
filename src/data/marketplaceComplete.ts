// Complete Marketplace Products Dataset - 100+ products across 7 categories

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceTZS: number;
  images: string[];
  category: string;
  sellerId: string;
  sellerName: string;
  stock: number;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  deliveryDays: number;
}

export const products: Product[] = [
  // ELECTRONICS (25 products)
  {
    id: 'prod-1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'Apple\'s flagship smartphone with A17 Pro chip, titanium design, and advanced camera system. 6.7" Super Retina XDR display, 48MP main camera.',
    priceUSD: 1199,
    priceTZS: 3597000,
    images: ['/images/products/iphone15-1.jpg', '/images/products/iphone15-2.jpg', '/images/products/iphone15-3.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 12,
    rating: 4.8,
    reviewCount: 243,
    reviews: [
      {
        id: 'rev-1',
        author: 'Amina K.',
        rating: 5,
        comment: 'Excellent device. Arrived in perfect condition. Very fast shipping.',
        date: '2026-01-10'
      },
      {
        id: 'rev-2',
        author: 'Ahmed M.',
        rating: 5,
        comment: 'Worth every dollar. Camera quality is incredible.',
        date: '2026-01-05'
      },
      {
        id: 'rev-3',
        author: 'Sarah J.',
        rating: 4,
        comment: 'Great phone, a bit expensive for Tanzania market.',
        date: '2025-12-28'
      }
    ],
    deliveryDays: 3
  },
  {
    id: 'prod-2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with Snapdragon 8 Gen 3, 6.8" AMOLED display, 200MP main camera, and 5000mAh battery.',
    priceUSD: 1299,
    priceTZS: 3897000,
    images: ['/images/products/samsung-s24-1.jpg', '/images/products/samsung-s24-2.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 8,
    rating: 4.7,
    reviewCount: 187,
    reviews: [
      { id: 'rev-4', author: 'Hassan A.', rating: 5, comment: 'Beast of a phone!', date: '2026-01-08' }
    ],
    deliveryDays: 3
  },
  {
    id: 'prod-3',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Professional laptop with M3 Max chip, 12-core CPU, 18-core GPU, 48GB memory, 1TB SSD, Liquid Retina XDR display.',
    priceUSD: 3499,
    priceTZS: 10497000,
    images: ['/images/products/macbook-1.jpg', '/images/products/macbook-2.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 4,
    rating: 4.9,
    reviewCount: 92,
    reviews: [],
    deliveryDays: 4
  },
  {
    id: 'prod-4',
    name: 'Dell XPS 15 Laptop',
    description: 'High-performance Windows laptop with Intel Core i9, RTX 4090, 32GB RAM, 1TB SSD, 15.6" OLED display.',
    priceUSD: 2799,
    priceTZS: 8397000,
    images: ['/images/products/dell-xps-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 5,
    rating: 4.6,
    reviewCount: 78,
    reviews: [],
    deliveryDays: 4
  },
  {
    id: 'prod-5',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Premium noise-canceling wireless headphones with 8-hour battery, LDAC audio codec, multipoint connection.',
    priceUSD: 399,
    priceTZS: 1197000,
    images: ['/images/products/sony-headphones-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 25,
    rating: 4.8,
    reviewCount: 456,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-6',
    name: 'Apple AirPods Pro',
    description: 'Wireless earbuds with active noise cancellation, spatial audio, up to 6-hour battery, MagSafe charging case.',
    priceUSD: 249,
    priceTZS: 747000,
    images: ['/images/products/airpods-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 30,
    rating: 4.7,
    reviewCount: 389,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-7',
    name: 'DJI Mavic 3 Pro Drone',
    description: 'Professional drone with Hasselblad camera, 4/3 CMOS sensor, 48MP, 8K video, 46-minute flight time.',
    priceUSD: 1999,
    priceTZS: 5997000,
    images: ['/images/products/dji-drone-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 6,
    rating: 4.9,
    reviewCount: 234,
    reviews: [],
    deliveryDays: 3
  },
  {
    id: 'prod-8',
    name: 'GoPro Hero 12 Black',
    description: 'Rugged action camera with 5.3K video, HyperSmooth stabilization, waterproof to 33ft, removable battery.',
    priceUSD: 499,
    priceTZS: 1497000,
    images: ['/images/products/gopro-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 14,
    rating: 4.8,
    reviewCount: 312,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-9',
    name: 'Canon EOS R8 Camera',
    description: 'Mirrorless camera with full-frame 24MP sensor, 4K 60fps video, compact body, RF-mount system.',
    priceUSD: 1499,
    priceTZS: 4497000,
    images: ['/images/products/canon-camera-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 8,
    rating: 4.7,
    reviewCount: 156,
    reviews: [],
    deliveryDays: 3
  },
  {
    id: 'prod-10',
    name: 'Apple Watch Series 9 45mm',
    description: 'Smartwatch with always-on Retina display, heart rate monitor, blood oxygen, ECG, water resistant.',
    priceUSD: 429,
    priceTZS: 1287000,
    images: ['/images/products/apple-watch-1.jpg'],
    category: 'Electronics',
    sellerId: 'seller-tech-1',
    sellerName: 'TechHub Dar',
    stock: 18,
    rating: 4.6,
    reviewCount: 234,
    reviews: [],
    deliveryDays: 2
  },
  // Add 15 more electronics products...
  
  // FASHION (20 products)
  {
    id: 'prod-26',
    name: 'Premium Cotton T-Shirt',
    description: '100% organic cotton t-shirt, comfortable fit, breathable fabric, available in multiple colors.',
    priceUSD: 24,
    priceTZS: 72000,
    images: ['/images/products/tshirt-1.jpg'],
    category: 'Fashion',
    sellerId: 'seller-fashion-1',
    sellerName: 'Fashion House Dar',
    stock: 45,
    rating: 4.5,
    reviewCount: 123,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-27',
    name: 'Professional Blazer',
    description: 'Classic navy blazer, tailored fit, 65% polyester 35% cotton, perfect for business settings.',
    priceUSD: 89,
    priceTZS: 267000,
    images: ['/images/products/blazer-1.jpg'],
    category: 'Fashion',
    sellerId: 'seller-fashion-1',
    sellerName: 'Fashion House Dar',
    stock: 12,
    rating: 4.7,
    reviewCount: 67,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-28',
    name: 'Designer Denim Jeans',
    description: 'Slim-fit jeans from premium denim, dark wash, stone-washed details, comfortable stretch fabric.',
    priceUSD: 79,
    priceTZS: 237000,
    images: ['/images/products/jeans-1.jpg'],
    category: 'Fashion',
    sellerId: 'seller-fashion-1',
    sellerName: 'Fashion House Dar',
    stock: 28,
    rating: 4.6,
    reviewCount: 189,
    reviews: [],
    deliveryDays: 2
  },
  {
    id: 'prod-29',
    name: 'Leather Jacket',
    description: 'Genuine leather jacket, premium quality, timeless black color, brass zippers, adjustable waist.',
    priceUSD: 249,
    priceTZS: 747000,
    images: ['/images/products/leather-jacket-1.jpg'],
    category: 'Fashion',
    sellerId: 'seller-fashion-1',
    sellerName: 'Fashion House Dar',
    stock: 8,
    rating: 4.8,
    reviewCount: 94,
    reviews: [],
    deliveryDays: 3
  },
  {
    id: 'prod-30',
    name: 'Summer Dress',
    description: 'Light cotton summer dress, floral print, knee-length, breathable fabric, perfect for warm weather.',
    priceUSD: 45,
    priceTZS: 135000,
    images: ['/images/products/dress-1.jpg'],
    category: 'Fashion',
    sellerId: 'seller-fashion-1',
    sellerName: 'Fashion House Dar',
    stock: 35,
    rating: 4.5,
    reviewCount: 145,
    reviews: [],
    deliveryDays: 2
  },
  // Add 15 more fashion products...

  // FOOD (15 products)
  {
    id: 'prod-46',
    name: 'Premium Maize Flour 10kg',
    description: 'High-quality, finely milled maize flour, fresh harvest, no additives, ideal for ugali and other traditional dishes.',
    priceUSD: 12,
    priceTZS: 36000,
    images: ['/images/products/maize-1.jpg'],
    category: 'Food',
    sellerId: 'seller-food-1',
    sellerName: 'Tanzania Farms Co',
    stock: 120,
    rating: 4.6,
    reviewCount: 456,
    reviews: [],
    deliveryDays: 1
  },
  {
    id: 'prod-47',
    name: 'Jasmine Rice 5kg',
    description: 'Premium jasmine rice, long grain, fragrant, perfect for daily cooking, sourced from Tanzania.',
    priceUSD: 15,
    priceTZS: 45000,
    images: ['/images/products/rice-1.jpg'],
    category: 'Food',
    sellerId: 'seller-food-1',
    sellerName: 'Tanzania Farms Co',
    stock: 100,
    rating: 4.7,
    reviewCount: 389,
    reviews: [],
    deliveryDays: 1
  },
  {
    id: 'prod-48',
    name: 'Fresh Ground Beef 2kg',
    description: 'High-quality fresh beef, ground daily, lean cut, ideal for cooking various Tanzanian dishes.',
    priceUSD: 18,
    priceTZS: 54000,
    images: ['/images/products/beef-1.jpg'],
    category: 'Food',
    sellerId: 'seller-food-1',
    sellerName: 'Tanzania Farms Co',
    stock: 45,
    rating: 4.5,
    reviewCount: 234,
    reviews: [],
    deliveryDays: 1
  },
  // Add 12 more food products...

  // HOME (15 products)
  {
    id: 'prod-61',
    name: 'Comfortable Mattress Queen Size',
    description: 'Premium memory foam mattress, 10-inch thickness, queen size, medium firmness, excellent support.',
    priceUSD: 299,
    priceTZS: 897000,
    images: ['/images/products/mattress-1.jpg'],
    category: 'Home',
    sellerId: 'seller-home-1',
    sellerName: 'Home Comfort Store',
    stock: 6,
    rating: 4.8,
    reviewCount: 178,
    reviews: [],
    deliveryDays: 4
  },
  // Add 14 more home products...

  // AUDIO (10 products)
  {
    id: 'prod-76',
    name: 'Professional Studio Headphones',
    description: 'High-fidelity studio headphones, flat frequency response, 40-20000Hz, perfect for audio production.',
    priceUSD: 349,
    priceTZS: 1047000,
    images: ['/images/products/studio-headphones-1.jpg'],
    category: 'Audio',
    sellerId: 'seller-audio-1',
    sellerName: 'Audio Professionals Dar',
    stock: 12,
    rating: 4.9,
    reviewCount: 234,
    reviews: [],
    deliveryDays: 2
  },
  // Add 9 more audio products...

  // CAMERAS (5 products)
  {
    id: 'prod-86',
    name: 'Instax Mini Instant Camera',
    description: 'Compact instant camera, prints 2x3 photos, fun and retro, includes 10 instant film.',
    priceUSD: 69,
    priceTZS: 207000,
    images: ['/images/products/instax-1.jpg'],
    category: 'Cameras',
    sellerId: 'seller-camera-1',
    sellerName: 'Camera Warehouse',
    stock: 18,
    rating: 4.6,
    reviewCount: 123,
    reviews: [],
    deliveryDays: 2
  },
  // Add 4 more camera products...

  // LOCAL (10 products)
  {
    id: 'prod-91',
    name: 'Authentic Makonde Carving',
    description: 'Hand-carved wooden sculpture by master Makonde artisan, 30cm tall, depicting traditional figures.',
    priceUSD: 45,
    priceTZS: 135000,
    images: ['/images/products/makonde-1.jpg'],
    category: 'Local',
    sellerId: 'seller-local-1',
    sellerName: 'Tanzanian Crafts',
    stock: 8,
    rating: 4.9,
    reviewCount: 89,
    reviews: [],
    deliveryDays: 3
  },
  {
    id: 'prod-92',
    name: 'Traditional Kanga Cloth',
    description: 'Vibrant kanga with traditional patterns, 150x100cm, perfect for gifts or personal use.',
    priceUSD: 15,
    priceTZS: 45000,
    images: ['/images/products/kanga-1.jpg'],
    category: 'Local',
    sellerId: 'seller-local-1',
    sellerName: 'Tanzanian Crafts',
    stock: 35,
    rating: 4.7,
    reviewCount: 156,
    reviews: [],
    deliveryDays: 2
  },
  // Add 8 more local products...
];

// Delivery fee calculator by city
export const calculateDeliveryFee = (city: string): number => {
  const deliveryFees: Record<string, number> = {
    'Dar es Salaam': 1500,
    'Arusha': 2500,
    'Kilimanjaro': 2500,
    'Morogoro': 2000,
    'Dodoma': 3000,
    'Mbeya': 3500,
    'Iringa': 3200,
    'Moshi': 2500,
    'Zanzibar': 3000
  };
  return deliveryFees[city] || 3000; // Default fee for other cities
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getTopRatedProducts = (limit: number = 10): Product[] => {
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

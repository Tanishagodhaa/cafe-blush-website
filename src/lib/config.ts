// Site configuration - Cafe Blush, Jalna
export const siteConfig = {
  name: 'Café Blush',
  tagline: 'The Sip Of Happiness',
  description: 'Café Blush, Jalna — The Sip Of Happiness. Tasty burgers, shakes and sandwiches. Open 11AM–10PM. Order on Swiggy / Zomato or visit RWW3+WR5, Dr Rajendra Prasad Rd.',
  
  // Contact Information
  phone: '+91 73858 47999',
  phoneDisplay: '+91 73858 47999',
  email: 'cafeblushjalna@gmail.com',
  
  // Address
  address: {
    full: 'RWW3+WR5, Dr Rajendra Prasad Rd, Jalna, Maharashtra, India',
    street: 'RWW3+WR5, Dr Rajendra Prasad Rd',
    city: 'Jalna',
    state: 'Maharashtra',
    country: 'India',
    plusCode: 'RWW3+WR5',
  },
  
  // Operating Hours
  hours: {
    open: '11:00',
    close: '22:00',
    displayOpen: '11:00 AM',
    displayClose: '10:00 PM',
    timezone: 'Asia/Kolkata',
  },
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/cafeblushjalna',
    instagramHandle: '@cafeblushjalna',
    facebook: 'https://facebook.com/cafeblushjalna',
  },
  
  // Delivery Partners
  delivery: {
    swiggy: 'https://www.swiggy.com/restaurants/cafe-blush-jalna',
    zomato: 'https://www.zomato.com/jalna/cafe-blush',
  },
  
  // Google Maps
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7!2d75.88!3d19.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRWW3%2BWR5%2C%20Dr%20Rajendra%20Prasad%20Rd%2C%20Jalna!5e0!3m2!1sen!2sin!4v1234567890',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=RWW3%2BWR5%2C+Dr+Rajendra+Prasad+Rd%2C+Jalna%2C+Maharashtra%2C+India',
    coordinates: {
      lat: 19.84,
      lng: 75.88,
    },
  },
  
  // SEO
  seo: {
    title: 'Café Blush — The Sip Of Happiness | Jalna',
    description: 'Café Blush, Jalna — The Sip Of Happiness. Tasty burgers, shakes and sandwiches. Open 11AM–10PM. Order on Swiggy / Zomato or visit RWW3+WR5, Dr Rajendra Prasad Rd.',
    keywords: 'cafe jalna, restaurant jalna, burgers jalna, shakes jalna, cafe blush, fast food jalna, the sip of happiness',
    ogImage: '/images/og-image.jpg',
  },
  
  // Analytics (owner to replace with actual IDs)
  analytics: {
    ga4Id: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
    fbPixelId: '', // Replace with Facebook Pixel ID if available
  },
  
  // Navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Order', href: '/order' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact', href: '/contact' },
  ],
  
  // Menu Categories
  menuCategories: [
    { id: 'starters', name: 'Starters & Sides' },
    { id: 'sandwiches', name: 'Sandwiches & Burgers' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'snacks', name: 'Snacks' },
  ],
  
  // Dietary Tags
  dietaryTags: [
    { id: 'veg', name: 'Vegetarian', color: 'green' },
    { id: 'egg', name: 'Contains Egg', color: 'yellow' },
    { id: 'dairy', name: 'Contains Dairy', color: 'blue' },
  ],
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  dietary: string[];
  image?: string;
  featured?: boolean;
  available?: boolean;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
  validFrom: string;
  validUntil: string;
  active: boolean;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  source?: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export default siteConfig;

import { Offer, Review, GalleryImage } from '@/lib/config';

// Sample offers
export const offers: Offer[] = [
  {
    id: '1',
    title: 'Winter Choco-Combo',
    description: 'Nutella Shake + Masala Fries at special price',
    image: '/images/offers/winter-combo.jpg',
    validFrom: '2025-12-01',
    validUntil: '2026-02-28',
    active: true,
  },
  {
    id: '2',
    title: 'Student Special',
    description: 'Show your student ID and get 10% off on all beverages',
    image: '/images/offers/student-special.jpg',
    validFrom: '2025-01-01',
    validUntil: '2026-12-31',
    active: true,
  },
  {
    id: '3',
    title: 'Weekend Burger Fest',
    description: 'Buy any 2 burgers and get a free drink on weekends',
    image: '/images/offers/burger-fest.jpg',
    validFrom: '2025-01-01',
    validUntil: '2026-12-31',
    active: true,
  },
];

// Sample reviews
export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Amazing shakes and the paneer momos are to die for! Best cafe in Jalna.',
    date: '2025-12-15',
    source: 'Google',
  },
  {
    id: '2',
    name: 'Rahul Patil',
    rating: 4,
    comment: 'Great ambiance and friendly staff. The masala fries are addictive!',
    date: '2025-12-10',
    source: 'Zomato',
  },
  {
    id: '3',
    name: 'Sneha Joshi',
    rating: 5,
    comment: 'Perfect hangout spot for students. Affordable prices and tasty food.',
    date: '2025-12-05',
    source: 'Google',
  },
  {
    id: '4',
    name: 'Amit Kumar',
    rating: 4,
    comment: 'Love the peri peri burger! Will definitely come back for more.',
    date: '2025-11-28',
    source: 'Swiggy',
  },
  {
    id: '5',
    name: 'Neha Deshmukh',
    rating: 5,
    comment: 'Cozy place with excellent food. The Nutella shake is heavenly!',
    date: '2025-11-20',
    source: 'Zomato',
  },
];

// Gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/cafe-interior-1.jpg',
    alt: 'Café Blush cozy interior with warm accents',
    caption: 'Our cozy seating area',
  },
  {
    id: '2',
    src: '/images/gallery/nutella-shake.jpg',
    alt: 'Creamy Nutella shake served in a tall glass',
    caption: 'Our signature Nutella Shake',
  },
  {
    id: '3',
    src: '/images/gallery/paneer-momos.jpg',
    alt: 'Tandoori paneer momos with chutney',
    caption: 'Paneer Tandoori Momos',
  },
  {
    id: '4',
    src: '/images/gallery/burger.jpg',
    alt: 'Peri peri burger with crispy fries',
    caption: 'Our famous Peri Peri Burger',
  },
  {
    id: '5',
    src: '/images/gallery/cafe-counter.jpg',
    alt: 'Café Blush order counter',
    caption: 'Friendly service at the counter',
  },
  {
    id: '6',
    src: '/images/gallery/group-dining.jpg',
    alt: 'Friends enjoying food at Café Blush',
    caption: 'Perfect spot for friends',
  },
  {
    id: '7',
    src: '/images/gallery/desserts.jpg',
    alt: 'Brownie with ice cream dessert',
    caption: 'Indulgent desserts',
  },
  {
    id: '8',
    src: '/images/gallery/beverages.jpg',
    alt: 'Variety of cold beverages and shakes',
    caption: 'Refreshing beverages',
  },
];

// About content
export const aboutContent = {
  main: "Café Blush is a cozy local cafe in Jalna serving freshly-prepared shakes, sandwiches and quick bites. A favourite hangout for students and families — friendly service, simple comfort food, and great value.",
  location: "Located near Ram Mandir / Minakshi NX — easy parking.",
  story: "Started with a passion for good food and warm hospitality, Café Blush has become Jalna's favorite spot for quick bites, refreshing drinks, and memorable moments with loved ones.",
};

export const getActiveOffers = (): Offer[] => {
  const today = new Date().toISOString().split('T')[0];
  return offers.filter(
    offer => offer.active && offer.validFrom <= today && offer.validUntil >= today
  );
};

export const getAverageRating = (): number => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};

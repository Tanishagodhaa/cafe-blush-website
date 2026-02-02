import { MenuItem } from '@/lib/config';

// Initial menu items as specified in requirements
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Nutella Shake',
    description: 'Creamy Nutella blended shake',
    price: 130,
    category: 'beverages',
    dietary: ['veg', 'dairy'],
    featured: true,
    available: true,
    image: '/images/menu/nutella-shake.jpg',
  },
  {
    id: '2',
    name: 'Paneer Tandoori Momos (8 pcs)',
    description: 'Tandoori paneer filling, spicy chutney',
    price: 170,
    category: 'starters',
    dietary: ['veg', 'dairy'],
    featured: true,
    available: true,
    image: '/images/menu/paneer-momos.jpg',
  },
  {
    id: '3',
    name: 'Peri Peri Burger',
    description: 'Spicy peri peri patty, lettuce, house sauce',
    price: 130,
    category: 'sandwiches',
    dietary: ['egg'],
    featured: true,
    available: true,
    image: '/images/menu/peri-peri-burger.jpg',
  },
  {
    id: '4',
    name: 'Masala Maggi',
    description: 'Classic masala Maggi, tossed with spices',
    price: 70,
    category: 'snacks',
    dietary: ['veg'],
    featured: false,
    available: true,
    image: '/images/menu/masala-maggi.jpg',
  },
  {
    id: '5',
    name: 'Iced Coffee',
    description: 'Cold-brew style iced coffee with milk',
    price: 110,
    category: 'beverages',
    dietary: ['veg', 'dairy'],
    featured: true,
    available: true,
    image: '/images/menu/iced-coffee.jpg',
  },
  {
    id: '6',
    name: 'Masala Fries',
    description: 'Crispy fries tossed in special masala',
    price: 130,
    category: 'snacks',
    dietary: ['veg'],
    featured: true,
    available: true,
    image: '/images/menu/masala-fries.jpg',
  },
  // Additional items to populate the menu
  {
    id: '7',
    name: 'Chocolate Milkshake',
    description: 'Rich chocolate milkshake with whipped cream',
    price: 120,
    category: 'beverages',
    dietary: ['veg', 'dairy'],
    featured: false,
    available: true,
    image: '/images/menu/chocolate-shake.jpg',
  },
  {
    id: '8',
    name: 'Veg Club Sandwich',
    description: 'Triple-decker sandwich with fresh veggies and cheese',
    price: 150,
    category: 'sandwiches',
    dietary: ['veg', 'dairy'],
    featured: false,
    available: true,
    image: '/images/menu/veg-club-sandwich.jpg',
  },
  {
    id: '9',
    name: 'Cheese Garlic Bread',
    description: 'Crispy garlic bread topped with melted cheese',
    price: 90,
    category: 'starters',
    dietary: ['veg', 'dairy'],
    featured: false,
    available: true,
    image: '/images/menu/garlic-bread.jpg',
  },
  {
    id: '10',
    name: 'Brownie with Ice Cream',
    description: 'Warm chocolate brownie served with vanilla ice cream',
    price: 150,
    category: 'desserts',
    dietary: ['veg', 'dairy', 'egg'],
    featured: true,
    available: true,
    image: '/images/menu/brownie.jpg',
  },
  {
    id: '11',
    name: 'Cold Coffee',
    description: 'Refreshing cold coffee with ice cream',
    price: 100,
    category: 'beverages',
    dietary: ['veg', 'dairy'],
    featured: false,
    available: true,
    image: '/images/menu/cold-coffee.jpg',
  },
  {
    id: '12',
    name: 'Paneer Tikka Sandwich',
    description: 'Grilled sandwich with spiced paneer tikka filling',
    price: 140,
    category: 'sandwiches',
    dietary: ['veg', 'dairy'],
    featured: false,
    available: true,
    image: '/images/menu/paneer-tikka-sandwich.jpg',
  },
];

export const getMenuByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category && item.available);
};

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter(item => item.featured && item.available);
};

export const searchMenu = (query: string): MenuItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return menuItems.filter(
    item =>
      item.available &&
      (item.name.toLowerCase().includes(lowercaseQuery) ||
        item.description.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterByDietary = (items: MenuItem[], tags: string[]): MenuItem[] => {
  if (tags.length === 0) return items;
  return items.filter(item => tags.some(tag => item.dietary.includes(tag)));
};

export const sortByPrice = (items: MenuItem[], ascending: boolean = true): MenuItem[] => {
  return [...items].sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
};

export default menuItems;

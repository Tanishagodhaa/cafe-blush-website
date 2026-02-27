'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MenuItem } from '@/lib/config';
import { formatPrice } from '@/lib/utils';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const getDietaryBadgeClass = (tag: string) => {
    switch (tag) {
      case 'veg':
        return 'badge-veg';
      case 'egg':
        return 'badge-egg';
      case 'dairy':
        return 'badge-dairy';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDietaryLabel = (tag: string) => {
    switch (tag) {
      case 'veg':
        return 'Veg';
      case 'egg':
        return 'Egg';
      case 'dairy':
        return 'Dairy';
      default:
        return tag;
    }
  };

  return (
    <motion.article 
      className="menu-item-card group" 
      role="article" 
      aria-label={item.name}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blush-coral to-blush-brown flex items-center justify-center">
            <span className="text-white text-4xl">🍽️</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {item.featured && (
          <motion.div 
            className="absolute top-3 right-3 badge badge-gold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            ⭐ Popular
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-heading font-semibold text-lg text-blush-brown leading-tight">
            {item.name}
          </h3>
          <span className="price text-lg font-bold whitespace-nowrap ml-2">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="text-muted-gray text-sm line-clamp-2">
          {item.description}
        </p>

        {/* Dietary Tags */}
        <div className="flex flex-wrap gap-1">
          {item.dietary.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`badge text-xs ${getDietaryBadgeClass(tag)}`}
            >
              {getDietaryLabel(tag)}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

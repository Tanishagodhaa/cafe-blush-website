'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { siteConfig } from '@/lib/config';
import { formatPhoneLink } from '@/lib/utils';
import OpenStatusBadge from './OpenStatusBadge';

export default function Hero() {
  // Animation variants for category pills
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: 'rgba(255, 255, 255, 0.35)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for hero image - replace with actual image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Blush overlay */}
        <div className="hero-overlay" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-white/10 blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-white/5 blur-md"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-8 h-8 rounded-full bg-blush-coral/30 blur-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="flex justify-center">
            <OpenStatusBadge />
          </div>

          {/* Main Headline */}
          <motion.h1 
            className="text-white text-h1-mobile lg:text-h1-desktop drop-shadow-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            The Sip Of Happiness
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to Café Blush, Jalna — shakes, sandwiches & local favourites.
          </motion.p>

          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 pt-2"
            initial="hidden"
            animate="visible"
          >
            {['Shakes', 'Burgers', 'Sandwiches', 'Local favourites'].map((item, i) => (
              <motion.span
                key={item}
                custom={i}
                variants={pillVariants}
                whileHover="hover"
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          >
            <motion.a
              href={formatPhoneLink(siteConfig.phone)}
              className="btn-primary bg-white text-blush-brown hover:bg-blush-coral hover:text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {siteConfig.phoneDisplay}
            </motion.a>
            
            <motion.a
              href={siteConfig.delivery.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-orange-500 hover:bg-orange-600"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Order on Swiggy
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/menu" className="btn-outline border-white text-white hover:bg-white hover:text-blush-brown">
                View Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Info */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.span 
              className="flex items-center"
              whileHover={{ scale: 1.1, color: '#fff' }}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {siteConfig.hours.displayOpen} – {siteConfig.hours.displayClose}
            </motion.span>
            <span className="hidden sm:inline">•</span>
            <motion.span 
              className="flex items-center"
              whileHover={{ scale: 1.1, color: '#fff' }}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {siteConfig.address.city}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

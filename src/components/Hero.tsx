'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { siteConfig } from '@/lib/config';
import { formatPhoneLink } from '@/lib/utils';
import OpenStatusBadge from './OpenStatusBadge';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for hero image - replace with actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        {/* Blush overlay */}
        <div className="hero-overlay" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/50 via-transparent to-transparent" />
      </div>

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
          <h1 className="text-white text-h1-mobile lg:text-h1-desktop drop-shadow-lg">
            The Sip Of Happiness
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Welcome to Café Blush, Jalna — shakes, sandwiches & local favourites.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['Shakes', 'Burgers', 'Sandwiches', 'Local favourites'].map((item) => (
              <span
                key={item}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          >
            <a
              href={formatPhoneLink(siteConfig.phone)}
              className="btn-primary bg-white text-blush-brown hover:bg-blush-coral hover:text-white"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {siteConfig.phoneDisplay}
            </a>
            
            <a
              href={siteConfig.delivery.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-orange-500 hover:bg-orange-600"
            >
              Order on Swiggy
            </a>

            <Link href="/menu" className="btn-outline border-white text-white hover:bg-white hover:text-blush-brown">
              View Menu
            </Link>
          </motion.div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 text-white/80 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {siteConfig.hours.displayOpen} – {siteConfig.hours.displayClose}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {siteConfig.address.city}
            </span>
          </div>
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

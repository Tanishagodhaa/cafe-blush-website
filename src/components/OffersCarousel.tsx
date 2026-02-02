'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { offers, getActiveOffers } from '@/data/content';
import { Offer } from '@/lib/config';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface OfferCardProps {
  offer: Offer;
}

function OfferCard({ offer }: OfferCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card overflow-hidden"
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-4">
        {offer.image ? (
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blush-coral to-blush-brown flex items-center justify-center">
            <span className="text-white text-4xl">🎉</span>
          </div>
        )}
        <div className="absolute top-3 right-3 badge badge-gold">
          Limited Time
        </div>
      </div>

      <h3 className="font-heading font-semibold text-xl text-blush-coral mb-2">
        {offer.title}
      </h3>

      <p className="text-muted-gray mb-4">
        {offer.description}
      </p>

      <div className="flex items-center text-sm text-muted-gray">
        <CalendarIcon className="w-4 h-4 mr-2" />
        <span>
          Valid: {formatDate(offer.validFrom)} – {formatDate(offer.validUntil)}
        </span>
      </div>
    </motion.article>
  );
}

export default function OffersCarousel() {
  const activeOffers = getActiveOffers();

  if (activeOffers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-gray">No active offers at the moment. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activeOffers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

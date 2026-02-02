'use client';

import Link from 'next/link';
import {
  PhoneIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { siteConfig } from '@/lib/config';
import { formatPhoneLink } from '@/lib/utils';

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar" aria-label="Quick actions">
      <a
        href={formatPhoneLink(siteConfig.phone)}
        className="flex flex-col items-center text-blush-brown hover:text-blush-coral transition-colors"
        aria-label="Call Café Blush"
      >
        <PhoneIcon className="w-6 h-6" />
        <span className="text-xs mt-1 font-medium">Call</span>
      </a>

      <Link
        href="/order"
        className="flex flex-col items-center text-white bg-blush-coral px-6 py-2 rounded-full -mt-4 shadow-lg hover:bg-opacity-90 transition-all"
        aria-label="Order food"
      >
        <ShoppingBagIcon className="w-6 h-6" />
        <span className="text-xs mt-1 font-medium">Order</span>
      </Link>

      <a
        href={siteConfig.maps.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-blush-brown hover:text-blush-coral transition-colors"
        aria-label="Get directions to Café Blush"
      >
        <MapPinIcon className="w-6 h-6" />
        <span className="text-xs mt-1 font-medium">Directions</span>
      </a>
    </div>
  );
}

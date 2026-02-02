'use client';

import { siteConfig } from '@/lib/config';

export default function MapEmbed() {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-card">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(siteConfig.address.full)}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${siteConfig.name}`}
        aria-label={`Google Maps showing ${siteConfig.name} at ${siteConfig.address.full}`}
      />
      
      {/* Fallback for no API key - shows static map link */}
      <noscript>
        <a 
          href={siteConfig.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-full bg-gray-200"
        >
          View on Google Maps
        </a>
      </noscript>
    </div>
  );
}

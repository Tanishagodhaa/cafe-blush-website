import Link from 'next/link';
import Hero from '@/components/Hero';
import MenuItemCard from '@/components/MenuItemCard';
import OffersCarousel from '@/components/OffersCarousel';
import ReviewsSection from '@/components/ReviewsSection';
import { getFeaturedItems } from '@/data/menu';
import { aboutContent } from '@/data/content';
import { siteConfig } from '@/lib/config';
import { formatPhoneLink } from '@/lib/utils';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Café Blush',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'RWW3+WR5, Dr Rajendra Prasad Rd',
    addressLocality: 'Jalna',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  telephone: '+91 73858 47999',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '22:00',
    },
  ],
  servesCuisine: ['Fast Food', 'Cafe'],
  url: 'https://cafeblush.in',
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  image: ['https://cafeblush.in/images/hero-bg.jpg'],
  priceRange: '₹₹',
  acceptsReservations: false,
  menu: 'https://cafeblush.in/menu',
};

export default function HomePage() {
  const featuredItems = getFeaturedItems().slice(0, 6);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Welcome to Café Blush</h2>
            <p className="text-lg text-blush-brown mb-4">{aboutContent.main}</p>
            <p className="text-muted-gray flex items-center justify-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              {aboutContent.location}
            </p>
            <Link href="/about" className="btn-outline mt-6 inline-flex items-center gap-2">
              Learn More About Us
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Popular Picks</h2>
            <p className="text-muted-gray max-w-xl mx-auto">
              Our most loved items, handpicked for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu" className="btn-primary inline-flex items-center gap-2">
              View Full Menu
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="section bg-blush-coral text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 lg:text-h2-desktop mb-4">Order Now</h2>
            <p className="text-white/80 mb-8">
              Craving something delicious? Order online for delivery or call us for pickup!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={siteConfig.delivery.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-orange-500 hover:bg-orange-600"
              >
                Order on Swiggy
              </a>
              <a
                href={siteConfig.delivery.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-red-500 hover:bg-red-600"
              >
                Order on Zomato
              </a>
              <a
                href={formatPhoneLink(siteConfig.phone)}
                className="btn-secondary"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call for Pickup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Special Offers</h2>
            <p className="text-muted-gray max-w-xl mx-auto">
              Don't miss out on our limited-time deals
            </p>
          </div>

          <OffersCarousel />

          <div className="text-center mt-10">
            <Link href="/offers" className="btn-outline inline-flex items-center gap-2">
              View All Offers
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
          </div>

          <ReviewsSection />
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section bg-blush-coral/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card">
              <ClockIcon className="w-10 h-10 text-blush-coral mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-blush-coral mb-2">Hours</h3>
              <p className="text-blush-brown">
                {siteConfig.hours.displayOpen} – {siteConfig.hours.displayClose}
              </p>
              <p className="text-muted-gray text-sm">Open 7 days a week</p>
            </div>

            <div className="card">
              <MapPinIcon className="w-10 h-10 text-blush-coral mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-blush-coral mb-2">Location</h3>
              <p className="text-blush-brown">{siteConfig.address.street}</p>
              <p className="text-muted-gray text-sm">{siteConfig.address.city}, {siteConfig.address.state}</p>
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blush-coral hover:underline text-sm mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>

            <div className="card">
              <PhoneIcon className="w-10 h-10 text-blush-coral mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-blush-coral mb-2">Contact</h3>
              <a
                href={formatPhoneLink(siteConfig.phone)}
                className="text-blush-brown hover:text-blush-coral transition-colors block"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="text-muted-gray text-sm mt-1">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush-coral transition-colors"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

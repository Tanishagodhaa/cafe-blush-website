import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { formatPhoneLink } from '@/lib/utils';
import { PhoneIcon, TruckIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Order Online',
  description: `Order delicious food from ${siteConfig.name} on Swiggy or Zomato. Fast delivery in Jalna!`,
  openGraph: {
    title: `Order Online | ${siteConfig.name}`,
    description: 'Order on Swiggy or Zomato for fast delivery, or call us for pickup.',
  },
};

export default function OrderPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blush-coral mb-4">Order Online</h1>
          <p className="text-muted-gray max-w-xl mx-auto">
            Craving Café Blush? Get your favourites delivered right to your door 
            or call us for pickup!
          </p>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Swiggy */}
          <div className="card text-center group">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-4xl">🧡</span>
            </div>
            <h2 className="text-xl font-heading font-semibold text-blush-brown mb-3">
              Order on Swiggy
            </h2>
            <p className="text-muted-gray mb-6">
              Fast delivery • Track your order • Easy payments
            </p>
            <a
              href={siteConfig.delivery.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-orange-500 hover:bg-orange-600 w-full"
            >
              <TruckIcon className="w-5 h-5 mr-2" />
              Order on Swiggy
            </a>
            <p className="text-xs text-muted-gray mt-3">
              Opens in new tab • Partner app
            </p>
          </div>

          {/* Zomato */}
          <div className="card text-center group">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-4xl">❤️</span>
            </div>
            <h2 className="text-xl font-heading font-semibold text-blush-brown mb-3">
              Order on Zomato
            </h2>
            <p className="text-muted-gray mb-6">
              Quick delivery • Live tracking • Safe payments
            </p>
            <a
              href={siteConfig.delivery.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-red-500 hover:bg-red-600 w-full"
            >
              <TruckIcon className="w-5 h-5 mr-2" />
              Order on Zomato
            </a>
            <p className="text-xs text-muted-gray mt-3">
              Opens in new tab • Partner app
            </p>
          </div>
        </div>

        {/* Pickup Option */}
        <div className="bg-blush-coral text-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Prefer Pickup?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Call us to place your order and pick it up fresh from our cafe. 
              Save on delivery fees!
            </p>

            <a
              href={formatPhoneLink(siteConfig.phone)}
              className="btn-secondary text-blush-brown hover:bg-white inline-flex items-center gap-2 text-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              Call {siteConfig.phoneDisplay}
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-left">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-soft-peach flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Pickup Location</p>
                  <p className="text-white/70 text-sm">{siteConfig.address.street}</p>
                  <p className="text-white/70 text-sm">{siteConfig.address.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-soft-peach flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Pickup Hours</p>
                  <p className="text-white/70 text-sm">
                    {siteConfig.hours.displayOpen} – {siteConfig.hours.displayClose}
                  </p>
                  <p className="text-white/70 text-sm">7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-center text-blush-coral mb-10">How Pickup Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blush-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-heading font-semibold text-blush-brown mb-2">Call Us</h3>
              <p className="text-muted-gray text-sm">
                Give us a call and tell us what you'd like to order
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blush-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-heading font-semibold text-blush-brown mb-2">We Prepare</h3>
              <p className="text-muted-gray text-sm">
                We'll have your order ready fresh when you arrive
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blush-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-heading font-semibold text-blush-brown mb-2">Pick Up & Enjoy</h3>
              <p className="text-muted-gray text-sm">
                Come to our cafe, grab your order and enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

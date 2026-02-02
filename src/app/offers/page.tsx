import { Metadata } from 'next';
import OffersCarousel from '@/components/OffersCarousel';
import { siteConfig } from '@/lib/config';
import { offers } from '@/data/content';
import { BellIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Offers & Deals',
  description: `Check out current offers and deals at ${siteConfig.name}, Jalna. Save on your favorite food!`,
  openGraph: {
    title: `Offers & Deals | ${siteConfig.name}`,
    description: 'Check out our current offers and limited-time deals.',
  },
};

export default function OffersPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blush-coral mb-4">Special Offers</h1>
          <p className="text-muted-gray max-w-xl mx-auto">
            Don't miss out on our limited-time deals and special combos. 
            Delicious food at even better prices!
          </p>
        </div>

        {/* Active Offers */}
        <OffersCarousel />

        {/* Stay Updated */}
        <div className="mt-16 bg-blush-coral/20 rounded-xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
            <BellIcon className="w-8 h-8 text-blush-coral" />
          </div>
          <h2 className="text-blush-coral mb-4">Never Miss an Offer</h2>
          <p className="text-blush-brown max-w-md mx-auto mb-6">
            Follow us on Instagram to stay updated with new offers, 
            menu additions, and exclusive deals!
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Follow {siteConfig.social.instagramHandle}
          </a>
        </div>

        {/* Terms */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-gray">
            * Offers are subject to availability and may change without notice. 
            Cannot be combined with other offers. Terms apply.
          </p>
        </div>
      </div>
    </div>
  );
}

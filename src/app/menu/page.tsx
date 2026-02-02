import { Metadata } from 'next';
import MenuList from '@/components/MenuList';
import MenuPDFDownload from '@/components/MenuPDFDownload';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Menu',
  description: `Explore the delicious menu at ${siteConfig.name} — shakes, burgers, sandwiches and more. View prices and dietary info.`,
  openGraph: {
    title: `Menu | ${siteConfig.name}`,
    description: `Explore our delicious menu — shakes, burgers, sandwiches and local favourites.`,
  },
};

export default function MenuPage() {
  return (
    <div className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-blush-coral mb-4">Our Menu</h1>
          <p className="text-muted-gray max-w-xl mx-auto mb-6">
            Freshly prepared shakes, sandwiches, burgers and local favourites. 
            Something for everyone!
          </p>
          <MenuPDFDownload />
        </div>

        {/* Menu List with Search & Filters */}
        <MenuList />
      </div>
    </div>
  );
}

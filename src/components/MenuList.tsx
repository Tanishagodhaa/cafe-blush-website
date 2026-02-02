'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { menuItems, searchMenu, filterByDietary, sortByPrice } from '@/data/menu';
import { siteConfig, MenuItem } from '@/lib/config';
import { formatPrice, debounce } from '@/lib/utils';
import MenuItemCard from './MenuItemCard';

type SortOption = 'default' | 'price-asc' | 'price-desc';

export default function MenuList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    let items: MenuItem[] = menuItems.filter(item => item.available);

    // Search filter
    if (searchQuery) {
      items = searchMenu(searchQuery);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Dietary filter
    if (selectedDietary.length > 0) {
      items = filterByDietary(items, selectedDietary);
    }

    // Sort
    if (sortOption === 'price-asc') {
      items = sortByPrice(items, true);
    } else if (sortOption === 'price-desc') {
      items = sortByPrice(items, false);
    }

    return items;
  }, [searchQuery, selectedCategory, selectedDietary, sortOption]);

  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const toggleDietary = (tag: string) => {
    setSelectedDietary(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDietary([]);
    setSortOption('default');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedDietary.length > 0;

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-card p-4 sticky top-20 z-30">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-gray" />
            <input
              type="text"
              placeholder="Search menu items..."
              className="input-field pl-10"
              onChange={(e) => handleSearch(e.target.value)}
              aria-label="Search menu"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            className="md:hidden btn-outline flex items-center justify-center"
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
          >
            <FunnelIcon className="w-5 h-5 mr-2" />
            Filters {hasActiveFilters && `(${selectedDietary.length + (selectedCategory !== 'all' ? 1 : 0)})`}
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-4">
            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field w-auto"
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {siteConfig.menuCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Sort Select */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="input-field w-auto"
              aria-label="Sort by"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-4"
          >
            {/* Category */}
            <div>
              <label className="text-sm font-medium text-blush-brown mb-2 block">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                <option value="all">All Categories</option>
                {siteConfig.menuCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium text-blush-brown mb-2 block">Sort by</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="input-field"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Dietary Tags */}
            <div>
              <label className="text-sm font-medium text-blush-brown mb-2 block">Dietary</label>
              <div className="flex flex-wrap gap-2">
                {siteConfig.dietaryTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => toggleDietary(tag.id)}
                    className={`badge ${selectedDietary.includes(tag.id)
                        ? 'bg-blush-coral text-white'
                        : 'bg-gray-100 text-blush-brown'
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop Dietary Tags */}
        <div className="hidden md:flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm text-muted-gray">Dietary:</span>
          <div className="flex flex-wrap gap-2">
            {siteConfig.dietaryTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleDietary(tag.id)}
                className={`badge transition-colors ${selectedDietary.includes(tag.id)
                    ? 'bg-blush-coral text-white'
                    : 'bg-gray-100 text-blush-brown hover:bg-gray-200'
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blush-coral hover:underline ml-auto"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-muted-gray">
          Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
        </p>
        <p className="text-xs text-muted-gray italic">
          Prices subject to change; confirm on-site.
        </p>
      </div>

      {/* Menu Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <MenuItemCard item={item} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-gray text-lg">No items found matching your criteria.</p>
          <button
            onClick={clearFilters}
            className="btn-primary mt-4"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

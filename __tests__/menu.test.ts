import { menuItems, searchMenu, filterByDietary, sortByPrice, getMenuByCategory, getFeaturedItems } from '@/data/menu';

describe('Menu Functions', () => {
  describe('searchMenu', () => {
    it('should find items by name', () => {
      const results = searchMenu('Nutella');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name.toLowerCase()).toContain('nutella');
    });

    it('should find items by description', () => {
      const results = searchMenu('creamy');
      expect(results.length).toBeGreaterThan(0);
    });

    it('should return empty array for no matches', () => {
      const results = searchMenu('xyznonexistent');
      expect(results.length).toBe(0);
    });

    it('should be case insensitive', () => {
      const results1 = searchMenu('BURGER');
      const results2 = searchMenu('burger');
      expect(results1.length).toBe(results2.length);
    });
  });

  describe('filterByDietary', () => {
    it('should filter by single dietary tag', () => {
      const vegItems = filterByDietary(menuItems, ['veg']);
      vegItems.forEach(item => {
        expect(item.dietary).toContain('veg');
      });
    });

    it('should return all items if no tags specified', () => {
      const results = filterByDietary(menuItems, []);
      expect(results.length).toBe(menuItems.length);
    });
  });

  describe('sortByPrice', () => {
    it('should sort ascending by default', () => {
      const sorted = sortByPrice(menuItems, true);
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].price).toBeGreaterThanOrEqual(sorted[i - 1].price);
      }
    });

    it('should sort descending when specified', () => {
      const sorted = sortByPrice(menuItems, false);
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].price).toBeLessThanOrEqual(sorted[i - 1].price);
      }
    });
  });

  describe('getMenuByCategory', () => {
    it('should return items from specific category', () => {
      const beverages = getMenuByCategory('beverages');
      beverages.forEach(item => {
        expect(item.category).toBe('beverages');
      });
    });

    it('should only return available items', () => {
      const items = getMenuByCategory('beverages');
      items.forEach(item => {
        expect(item.available).toBe(true);
      });
    });
  });

  describe('getFeaturedItems', () => {
    it('should return only featured items', () => {
      const featured = getFeaturedItems();
      featured.forEach(item => {
        expect(item.featured).toBe(true);
      });
    });

    it('should only return available featured items', () => {
      const featured = getFeaturedItems();
      featured.forEach(item => {
        expect(item.available).toBe(true);
      });
    });
  });
});

import { isOpen, formatPrice, isValidEmail, isValidPhone } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('formatPrice', () => {
    it('should format price with rupee symbol', () => {
      expect(formatPrice(130)).toBe('₹130');
      expect(formatPrice(0)).toBe('₹0');
      expect(formatPrice(1000)).toBe('₹1000');
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.in')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should validate correct Indian phone formats', () => {
      expect(isValidPhone('+91 73858 47999')).toBe(true);
      expect(isValidPhone('9876543210')).toBe(true);
      expect(isValidPhone('+919876543210')).toBe(true);
    });

    it('should reject invalid phone formats', () => {
      expect(isValidPhone('12345')).toBe(false);
      expect(isValidPhone('abcdefghij')).toBe(false);
    });
  });
});

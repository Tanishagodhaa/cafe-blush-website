import { siteConfig } from './config';

/**
 * Check if the cafe is currently open based on operating hours
 * Uses India timezone (Asia/Kolkata)
 */
export function isOpen(): boolean {
  const now = new Date();
  
  // Convert to India time
  const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const hours = indiaTime.getHours();
  const minutes = indiaTime.getMinutes();
  const currentTime = hours * 60 + minutes;
  
  // Parse opening hours
  const [openHour, openMin] = siteConfig.hours.open.split(':').map(Number);
  const [closeHour, closeMin] = siteConfig.hours.close.split(':').map(Number);
  
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;
  
  return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Get open/closed status text
 */
export function getOpenStatus(): { isOpen: boolean; text: string; nextChange: string } {
  const open = isOpen();
  
  if (open) {
    return {
      isOpen: true,
      text: 'Open now',
      nextChange: `Closes at ${siteConfig.hours.displayClose}`,
    };
  }
  
  return {
    isOpen: false,
    text: 'Closed',
    nextChange: `Opens at ${siteConfig.hours.displayOpen}`,
  };
}

/**
 * Format price in INR
 */
export function formatPrice(price: number): string {
  return `₹${price}`;
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

/**
 * Get current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate WhatsApp link
 */
export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (Indian)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Debounce function for search
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Scroll to element with offset
 */
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

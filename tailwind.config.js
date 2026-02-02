/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blush-coral': '#E86A33',        /* orange/coral from logo swirl */
        'blush-brown': '#5D4037',        /* chocolate brown from logo text */
        'warm-cream': '#FFF8F0',         /* warm cream background */
        'deep-brown': '#3E2723',         /* darker brown for headings */
        'accent-orange': '#FF7043',      /* bright accent */
        'muted-gray': '#9E9E9E',         /* secondary text */
        'soft-peach': '#FFCCBC',         /* light peach accent */
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-desktop': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-desktop': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(62, 39, 35, 0.1), 0 2px 4px -1px rgba(62, 39, 35, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(62, 39, 35, 0.15), 0 4px 6px -2px rgba(62, 39, 35, 0.08)',
      },
    },
  },
  plugins: [],
};

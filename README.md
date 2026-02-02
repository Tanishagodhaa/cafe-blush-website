# Cafe Blush - Website

A modern, mobile-first website for Cafe Blush (Jalna) built with Next.js, Tailwind CSS, and Decap CMS (formerly Netlify CMS).

![Cafe Blush](public/images/og-image.jpg)

## 🚀 Features

- **Modern Design**: Blush pink + deep teal color theme with warm, friendly vibes
- **Mobile-First**: Responsive design with sticky mobile CTA bar
- **Menu System**: Searchable, filterable menu with dietary tags and PDF export
- **CMS Integration**: Easy content management for non-technical users
- **SEO Optimized**: JSON-LD structured data, meta tags, sitemap
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigable
- **Performance**: Lazy loading, optimized images, fast load times

## 📦 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (Netlify CMS)
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **PDF Generation**: jsPDF
- **Deployment**: Vercel / Netlify

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cafe-blush-jalna.git
   cd cafe-blush-jalna
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   # Google Maps API Key (optional, for map embed)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
   
   # Contact Form Email (for production)
   CONTACT_EMAIL=cafeblushjalna@gmail.com
   
   # SendGrid API Key (for contact form emails)
   SENDGRID_API_KEY=your_sendgrid_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

### CMS Development

For local CMS development:

```bash
npx decap-server
```

Then visit [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Project Structure

```
cafe-blush-jalna/
├── content/              # CMS content (JSON/Markdown)
│   ├── menu/            # Menu items
│   ├── offers/          # Offers and deals
│   ├── gallery/         # Gallery images
│   ├── reviews/         # Customer reviews
│   └── settings/        # Site settings
├── public/
│   ├── admin/           # CMS admin interface
│   ├── images/          # Static images
│   └── icons/           # App icons
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   ├── data/            # Static data files
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Brand Colors

```css
:root {
  --blush-coral: #E86A33;   /* Primary accent (logo swirl) */
  --blush-brown: #5D4037;   /* Headings, buttons */
  --warm-cream: #FFF8F0;    /* Background */
  --deep-brown: #3E2723;    /* Footer, dark sections */
  --accent-orange: #FF7043; /* Highlights */
  --soft-peach: #FFCCBC;    /* Subtle accents */
  --muted-gray: #9E9E9E;    /* Secondary text */
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Netlify

1. Push code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Enable Identity for CMS authentication
5. Deploy

### Post-Deployment

1. Configure DNS to point domain to deployment
2. Enable HTTPS
3. Set up Netlify Identity (for CMS access)
4. Invite admin users

## 📝 CMS Admin Guide

Access the admin panel at `/admin` after deployment.

### Editing Menu Items

1. Go to Admin → Menu Items
2. Click "New Menu Item" or edit existing
3. Fill in details (name, price, category, dietary tags)
4. Save and publish

### Managing Offers

1. Go to Admin → Offers & Deals
2. Add new offers with validity dates
3. Toggle active/inactive

### Updating Site Settings

1. Go to Admin → Site Settings
2. Edit Business Info, Hours, Social links
3. Save changes

See `ADMIN_GUIDE.md` for detailed instructions.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📊 Performance Targets

- Lighthouse Performance: ≥70
- Lighthouse Accessibility: ≥90
- First Contentful Paint: <2s
- Time to Interactive: <3.5s

## 🔧 Configuration

### Google Analytics

Update `siteConfig.analytics.ga4Id` in `src/lib/config.ts`:

```typescript
analytics: {
  ga4Id: 'G-YOUR_GA4_ID',
}
```

### Google Maps

Replace `YOUR_GOOGLE_MAPS_API_KEY` in MapEmbed component or use environment variable.

## 📄 License

This project is proprietary software built for Cafe Blush, Jalna.

## 👥 Support

For technical support, contact the developer.

For content updates, use the CMS admin panel.

---

Built with ❤️ for Cafe Blush, Jalna

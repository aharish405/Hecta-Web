# Hecta Enterprises - Manufacturing Website

A modern, responsive B2B manufacturing website for **Hecta Enterprises** (Sudha Engineering Works), specializing in precision sheet metal stamping and fabrication for automotive manufacturers.

## 🏭 Company Overview

- **Company Name**: Sudha Engineering Works (Operating as Hecta Enterprises)
- **Industry**: Sheet Metal Stamping & Fabrication (Automotive B2B)
- **Founded**: 1993
- **Location**: Gagillapur, Dundigal-Gandimaisamma Mandal, Hyderabad, Telangana
- **Contact**: 
  - Phone: +91 9949302800
  - Email: hectaenterprises@gmail.com
  - Maps: https://maps.app.goo.gl/iJjaz3G9BK3U2imX6

## 🚀 Features

### Technical Features
- ✅ **Pure Static Site** - Built with Next.js 14 and React
- ✅ **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ✅ **PWA Enabled** - Progressive Web App with offline capabilities
- ✅ **SEO Optimized** - Comprehensive meta tags and semantic HTML
- ✅ **Fast Loading** - Optimized images and code splitting
- ✅ **Modern Design** - Industrial/automotive themed with premium aesthetics

### Design Features
- 🎨 **Industrial Color Scheme** - Dark blue, steel gray, and orange accents
- 🎯 **Smooth Animations** - Scroll-triggered animations and micro-interactions
- 📱 **Mobile-First** - Responsive design with mobile menu
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🌙 **Professional Theme** - Clean, modern B2B aesthetic

## 📋 Website Structure

1. **Hero Section** - Compelling headline with CTAs
2. **About Us** - Company history and value propositions
3. **Capabilities** - 6 service categories with detailed features
4. **Industries Served** - Automotive applications and products
5. **Process Overview** - 5-step workflow timeline
6. **Contact/RFQ Form** - Professional quote request with Google Maps
7. **Footer** - Company info, links, and SEO keywords

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: CSS Modules with custom properties
- **Fonts**: Inter & Roboto Condensed (Google Fonts)
- **PWA**: next-pwa
- **Build**: Static export for hosting anywhere

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Visit http://localhost:3000

3. **Build for Production**
```bash
npm run build
```

4. **Export Static Site**
```bash
npm run export
```
The static site will be in the `out/` directory.

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-dark: #0a1628;
  --primary-blue: #1e3a5f;
  --accent-orange: #ff6b35;
  /* ... more colors */
}
```

### Content
- Update company information in components
- Replace images in `public/images/`
- Modify contact details in `components/Contact.tsx`

### SEO
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... more metadata
}
```

## 📁 Project Structure

```
Hecta-Web/
├── app/
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Sticky navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Capabilities.tsx    # Services/capabilities
│   ├── Industries.tsx      # Industries served
│   ├── Process.tsx         # Process timeline
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/
│   ├── images/             # Website images
│   ├── manifest.json       # PWA manifest
│   └── *.png              # PWA icons
├── next.config.js          # Next.js config with PWA
├── package.json
└── README.md
```

## 🌐 Deployment

### Static Hosting (Recommended)
After building, deploy the `out/` folder to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `out/` folder
- **GitHub Pages**: Push `out/` to gh-pages branch
- **Any Static Host**: Upload `out/` directory

### Server Hosting
Deploy to any Node.js hosting:
```bash
npm run build
npm start
```

## 📱 PWA Features

The website is a Progressive Web App with:
- ✅ Installable on mobile devices
- ✅ Offline functionality
- ✅ App-like experience
- ✅ Custom app icons
- ✅ Splash screens

## 🔍 SEO Keywords

- Sheet metal stamping
- Progressive die stamping
- Automotive fabrication
- Laser cutting services
- CNC machining
- Two-wheeler parts manufacturer
- Four-wheeler components
- Hyderabad manufacturing
- OEM supplier
- Precision metal parts

## 📞 Support & Contact

For technical support or inquiries:
- **Email**: pemmakotlu@gmail.com
- **Phone**: +91 9949302800

## 📄 License

© 2026 Hecta Enterprises. All rights reserved.

---

**Built with ❤️ for Hecta Enterprises - Precision Manufacturing Since 1993**

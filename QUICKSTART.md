# 🚀 Quick Start Guide - Hecta Enterprises Website

## Prerequisites Check

Before starting, ensure you have Node.js installed:

```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/ (LTS version recommended)

## Step-by-Step Setup

### 1. Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, PWA support, etc.)

### 2. Run Development Server

```bash
npm run dev
```

Open your browser and visit: **http://localhost:3000**

You should see the Hecta Enterprises website running!

### 3. Make Changes

The website will automatically reload when you edit files:

- **Content**: Edit files in `components/` folder
- **Styles**: Edit `.module.css` files or `app/globals.css`
- **Images**: Add/replace images in `public/images/`

### 4. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

### 5. Export Static Site

```bash
npm run export
```

This creates a static website in the `out/` folder that you can deploy anywhere!

## Common Tasks

### Update Company Information

1. **Contact Details**: Edit `components/Contact.tsx`
2. **About Section**: Edit `components/About.tsx`
3. **Footer**: Edit `components/Footer.tsx`

### Change Colors

Edit `app/globals.css` and modify CSS variables:

```css
:root {
  --primary-dark: #0a1628;     /* Main dark color */
  --accent-orange: #ff6b35;    /* Accent color */
  /* ... etc */
}
```

### Add/Replace Images

1. Place images in `public/images/` folder
2. Reference them in components: `/images/your-image.png`

### Update SEO

Edit `app/layout.tsx` to change:
- Page title
- Meta description
- Keywords
- Open Graph tags

## Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Push code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Deploy (automatic!)

### Option 2: Netlify (Free)

1. Build the site: `npm run export`
2. Visit https://netlify.com
3. Drag & drop the `out/` folder
4. Done!

### Option 3: Traditional Hosting

1. Build: `npm run export`
2. Upload the `out/` folder to your web host via FTP
3. Point your domain to that folder

## PWA Icons (Important!)

The website needs app icons for PWA functionality:

1. Create a 192x192px logo image
2. Save as `public/icon-192x192.png`
3. Create a 512x512px logo image
4. Save as `public/icon-512x512.png`
5. Create a favicon.ico
6. Save as `public/favicon.ico`

See `public/ICON_INSTRUCTIONS.txt` for details.

## Troubleshooting

### Port 3000 already in use?

```bash
npm run dev -- -p 3001
```

### Build errors?

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Images not showing?

- Check file names match exactly (case-sensitive)
- Ensure images are in `public/images/` folder
- Use `/images/filename.png` in code (not `./images/`)

## Need Help?

- Check the main README.md for detailed documentation
- Contact: pemmakotlu@gmail.com
- Phone: +91 9949302800

---

**Happy Building! 🏭**

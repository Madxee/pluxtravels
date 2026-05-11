# Panachelux Travels & Tours

A premium, fully responsive, animated business website for **Panachelux Travels & Tours**, a Nigerian travel agency based in Abuja. Built with HTML5, CSS3, and vanilla JavaScript — designed for deployment on GitHub Pages with no backend required.

## Live Website

[View Live Site](https://yourusername.github.io/panachelux-travels)

## Features

- **7 Complete Pages**: Home, About, Services, Destinations, Visa Processing, Gallery, Contact
- **Premium Animations**: GSAP-powered hero text reveals, scroll-triggered animations, animated counters, floating orbit system
- **Glassmorphism UI**: Frosted glass card effects throughout the site
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile
- **Swiper.js Sliders**: Destination showcase and testimonial carousels
- **Lightbox Gallery**: Full-screen image viewer with keyboard navigation
- **Visa Filtering**: Filter visa services by region with animated transitions
- **Scroll Progress Bar**: Visual indicator of scroll position
- **Floating WhatsApp**: Quick access to WhatsApp chat
- **SEO Optimized**: Semantic HTML, Open Graph meta tags, alt text on all images
- **Sticky Navigation**: Transparent to solid background on scroll
- **Preloader**: Animated loading screen on page load
- **Back to Top**: Smooth scroll to top button
- **Mobile Hamburger Menu**: Slide-in mobile navigation overlay

## Technology Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations, glassmorphism
- **Vanilla JavaScript** — All interactions without frameworks
- **GSAP** — Advanced animations and timelines
- **Swiper.js** — Touch sliders and carousels
- **Font Awesome** — Icons
- **Google Fonts** — Montserrat & Poppins typography

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, About, Services, Visa Catalog, Destinations, Testimonials, Gallery, Contact CTA |
| About | `about.html` | Company story, Mission & Vision, Statistics, Team |
| Services | `services.html` | 9 detailed service cards, 4-step process |
| Destinations | `destinations.html` | 8 destinations with filtering, featured spotlight |
| Visa Processing | `visa-processing.html` | 8 visa cards with pricing, timeline, FAQ accordion |
| Gallery | `gallery.html` | Masonry grid with category filtering and lightbox |
| Contact | `contact.html` | Contact form, info cards, Google Map, WhatsApp CTA |

## Project Structure

```
panachelux-travels/
|
├── index.html                  # Homepage
├── about.html                  # About page
├── services.html               # Services page
├── destinations.html           # Destinations page
├── visa-processing.html        # Visa processing page
├── gallery.html                # Gallery page
├── contact.html                # Contact page
│
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   │
│   ├── js/
│   │   └── script.js           # Main JavaScript
│   │
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-bg.jpg
│   │   ├── destinations/
│   │   │   ├── dubai.jpg
│   │   │   ├── paris.jpg
│   │   │   ├── london.jpg
│   │   │   ├── maldives.jpg
│   │   │   ├── canada.jpg
│   │   │   ├── zanzibar.jpg
│   │   │   ├── rwanda.jpg
│   │   │   └── cape-town.jpg
│   │   ├── visas/
│   │   │   ├── visa-tanzania.jpg
│   │   │   ├── visa-egypt.jpg
│   │   │   ├── visa-kenya.jpg
│   │   │   ├── visa-morocco.jpg
│   │   │   ├── visa-qatar.jpg
│   │   │   ├── visa-east-africa.jpg
│   │   │   ├── visa-south-africa.jpg
│   │   │   ├── visa-uganda.jpg
│   │   │   └── visa-hotel-deals.jpg
│   │   ├── tours/
│   │   │   ├── time-to-travel.jpg
│   │   │   └── valentine-kenya.jpg
│   │   ├── gallery/
│   │   │   ├── gallery-1.jpg through gallery-8.jpg
│   │   └── testimonials/
│   │       ├── person-1.jpg through person-4.jpg
│   │
│   └── videos/
│       └── (video assets if needed)
│
└── README.md                   # This file
```

## Installation

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
3. **No build step required** — all files are ready for deployment

## GitHub Pages Deployment

### Option 1: Upload via Web Interface

1. Go to [GitHub](https://github.com) and create a new repository named `panachelux-travels`
2. Upload all files from this folder to the repository
3. Go to **Settings > Pages**
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/(root)** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/panachelux-travels`

### Option 2: Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Panachelux Travels & Tours website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/panachelux-travels.git

# Push to main branch
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Option 3: Direct Download

1. Download this folder as a ZIP file
2. Extract to your local machine
3. Open `index.html` to preview
4. Upload all extracted files to your web hosting

## Customization

### Changing Colors
Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #ff7a00;       /* Main orange accent */
  --deep-navy: #0a1628;     /* Dark background */
  --dark-slate: #111827;    /* Alternate background */
  --gold: #e8a238;          /* Gold accent */
  --green: #2dd4a8;         /* Success/visa badges */
}
```

### Updating Business Information
- Phone: Find and replace `0701 679 8300` across all HTML files
- Email: Find and replace `info@pluxtravels.com.ng`
- Address: Update in `index.html` and `contact.html`
- WhatsApp: Update `2347016798300` in all links

### Adding New Visa Services
1. Add visa image to `assets/images/visas/`
2. Copy an existing visa card in `visa-processing.html` and `index.html`
3. Update country name, price, processing time, and data-category

### Adding New Destinations
1. Add destination image to `assets/images/destinations/`
2. Add new slide to the Swiper in `destinations.html` and `index.html`

## Business Details

| Detail | Value |
|--------|-------|
| Company | Panachelux Travels & Tours |
| Phone | 0701 679 8300 |
| Email | info@pluxtravels.com.ng |
| Address | 3rd Floor, Nicon Insurance Plaza, Central Business District, Abuja 900103, FCT, Nigeria |
| Hours | Mon-Fri: 8AM - 6PM, Sat: 9AM - 4PM |

## Credits

- **Design & Development**: Built for Panachelux Travels & Tours
- **Fonts**: Montserrat & Poppins via Google Fonts
- **Icons**: Font Awesome
- **Animation**: GSAP (GreenSock)
- **Sliders**: Swiper.js
- **Images**: Generated AI imagery + Client-provided visa graphics

## License

All rights reserved. This website is proprietary to Panachelux Travels & Tours.

## Support

For questions or support, contact:
- WhatsApp: 0701 679 8300
- Email: info@pluxtravels.com.ng

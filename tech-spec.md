# Tech Spec — Panachelux Travels & Tours

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| gsap | ^3.12 | Core animation engine, ScrollTrigger, SplitText |
| lenis | ^1.1 | Smooth scroll with inertia |
| swiper | ^11 | Destination slider, testimonial slider |
| aos | ^2.3 | Scroll-triggered entrance animations |
| font-awesome | ^6.6 | Icons (plane, passport, hotel, etc.) |

No shadcn/ui components needed — this is a pure marketing/animation site with custom glassmorphism cards. Google Fonts (Montserrat, Poppins) loaded via CDN.

## Component Inventory

### Layout (shared across all 7 pages)

| Component | Source | Reuse |
|---|---|---|
| Navigation | Custom | All 7 pages — sticky, scroll-aware, mobile hamburger |
| Footer | Custom | All 7 pages — 4-column grid, newsletter, socials |
| FloatingWhatsApp | Custom | All 7 pages — fixed position, pulse animation |
| ScrollProgress | Custom | All 7 pages — GSAP ScrollTrigger scrub |
| BackToTop | Custom | All 7 pages — appears after 400px scroll |
| Preloader | Custom | All 7 pages — SVG spinner, fades on load |

### Sections (page-specific)

**Homepage (index.html)** — 9 sections
- HeroSection — video bg, orbit system, headline, CTAs
- AboutSection — split layout, stats counters, mission/vision
- ServicesSection — 3×3 glassmorphism card grid
- VisaCatalogSection — 8 visa cards with filter tabs
- DestinationsSection — Swiper slider with destination cards
- WhyChooseSection — 6 feature cards with large numbers
- TestimonialsSection — Swiper testimonial slider
- GallerySection — masonry grid + lightbox
- ContactCTASection — form + contact info + map

**About Page** — 5 sections: PageHeader, OurStory, MissionVisionValues, Statistics, Team, CTABanner

**Services Page** — 3 sections: PageHeader, ServicesGrid (×9 detail cards), ProcessSteps, CTABanner

**Destinations Page** — 4 sections: PageHeader, DestinationsGrid (×8 with filters), DestinationSpotlight, CTABanner

**Visa Processing Page** — 5 sections: PageHeader, VisaOverview, VisaCatalog (×8 with images), ProcessingTimeline, VisaFAQ

**Gallery Page** — 3 sections: PageHeader, GalleryMasonry (×12), VideoGallery

**Contact Page** — 4 sections: PageHeader, ContactCards (×4), ContactFormMap, WhatsAppCTA

## Animation Implementation

| Animation | Library | Implementation | Complexity |
|---|---|---|---|
| Preloader fade-out | GSAP | Timeline: opacity+scale on load event | Low |
| Orbit ring rotation | CSS @keyframes | Two rings: 90s CW, 60s CCW, linear infinite | Medium |
| Mouse parallax on orbit | JS + GSAP | mousemove listener → gsap.to with quickTo | Medium |
| Hero text entrance | GSAP Timeline | SplitText per line, staggered fade-up | Medium |
| Scroll progress bar | GSAP ScrollTrigger | scrub: true, scaleX 0→1 | Low |
| Navbar scroll effect | JS + CSS | scroll listener → class toggle, backdrop-filter | Low |
| AOS section entrances | AOS library | data-aos="fade-up" on all sections | Low |
| Counter animation | GSAP ScrollTrigger | start: "top 80%", tween number value | Medium |
| Floating animation | CSS @keyframes | translateY oscillation, 3s infinite | Low |
| Hover zoom | CSS transition | scale 1→1.1 on image, 0.6s | Low |
| Glassmorphism card glow | CSS transition | border-color + box-shadow on hover | Low |
| Masonry layout | CSS columns | column-count responsive | Low |
| Lightbox | Vanilla JS | Fullscreen overlay, prev/next navigation | Medium |
| Accordion (Visa FAQ) | Vanilla JS | Class toggle, max-height transition | Low |
| Swiper sliders | Swiper.js | Custom navigation arrows, pagination, autoplay | Low |
| Sticky navbar | CSS + JS | position: sticky, scroll-aware bg transition | Low |

## Key Decisions

1. **No React Router** — This is a GitHub Pages deployment with 7 static HTML pages. Standard `<a href>` navigation between pages. No SPA architecture needed.

2. **Orbit System** — The rotating destination orbit in the hero uses CSS `@keyframes` for the continuous ring rotation and JavaScript mouse tracking for the parallax offset. No GSAP needed for the rotation itself (CSS is more performant for infinite animations). Mouse parallax uses GSAP `quickTo` for smooth, performant updates.

3. **Shared Nav/Footer** — Since we have 7 separate HTML files, navigation and footer are duplicated across pages. This is intentional for GitHub Pages compatibility (no server-side includes). Each page is self-contained.

4. **Asset Generation Priority** — Destination images (8) and gallery images (8) are the highest priority for generation. Visa images come from client uploads. Testimonial portraits (4) are secondary priority. Hero video is sourced from Pexels.

5. **Lightbox** — Custom vanilla JS implementation rather than a library. Only 12 gallery images, simple prev/next/close functionality. Keeps bundle lean.

6. **Masonry** — Pure CSS `column-count` masonry (not JS-driven). Simpler, lighter, works well for image galleries. Each image maintains its natural aspect ratio.

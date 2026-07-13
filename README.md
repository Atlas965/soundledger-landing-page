# SoundLedger.ca — Corporate Landing Page

The official corporate landing page for **SoundLedger Technologies Inc.**, a Canadian music technology company
building infrastructure for creator collaboration, rights management, and royalty transparency.

This site positions SoundLedger as the corporate technology brand, while directing visitors to
[SplitSheet](https://splitsheet.ca) — SoundLedger's flagship Rights-as-a-Service product.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for fast builds and dev server
- **Tailwind CSS** for styling
- **Framer Motion** for subtle, professional animation
- **React Router** for the legal pages (Privacy Policy, Terms of Service)
- **lucide-react** for iconography

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project Structure

```
src/
  assets/              Brand assets (logo)
  components/          Shared UI: Navbar, Footer, Container, Reveal, HeroVisual
  components/sections/ Landing page sections (Hero, About, Products, Why, Artist, Partners)
  pages/               Route-level pages (Landing, Privacy Policy, Terms of Service)
public/                Static assets, favicon, robots.txt, sitemap.xml
```

## Content Sections

1. **Hero** — Primary headline, CTA to SplitSheet, abstract collaboration-network visual.
2. **About** — Company positioning and core problem pillars.
3. **Product Ecosystem** — SplitSheet (flagship), SoundScape and SoundLedger Records (coming soon).
4. **Why SoundLedger** — Problem vs. solution comparison.
5. **SoundLedger Artist** — The creative/cultural arm of the brand.
6. **Partners & Investors** — Credibility section targeting investors, labels, and technology partners.
7. **Footer** — Company, legal, and social links.

## SEO

Metadata, Open Graph tags, Twitter card tags, and JSON-LD structured data are configured in `index.html`.
Update `robots.txt` and `sitemap.xml` in `public/` if new routes are added.

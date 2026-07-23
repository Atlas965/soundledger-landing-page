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
- **gh-pages** for GitHub Pages deployment

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

## Deploy to GitHub Pages

This project is configured for GitHub Pages via the `gh-pages` package.

### One-command deploy

```bash
npm run deploy
```

This will:

1. Build the production site into `dist/`
2. Create a SPA `404.html` fallback (so Privacy / Terms routes work on refresh)
3. Push `dist/` to the `gh-pages` branch

### First-time GitHub Pages setup

1. Run `npm run deploy`
2. Open the repo on GitHub → **Settings → Pages**
3. Set **Source** to **Deploy from a branch**
4. Choose branch **`gh-pages`** / folder **`/` (root)**
5. Save

Site URL (project pages):

```
https://Atlas965.github.io/soundledger-landing-page/
```

### Custom domain: SoundLedger.ca

`public/CNAME` already contains:

```
SoundLedger.ca
```

Then:

1. GitHub → **Settings → Pages → Custom domain** → enter `SoundLedger.ca`
2. At your DNS provider, add the records GitHub shows (typically A records for apex + CNAME for `www`)
3. Enable **Enforce HTTPS** once DNS is verified

**Important:** when the custom domain is fully live, change Vite `base` to `"/"` in `vite.config.ts` and remove the `basename` prop from `BrowserRouter` in `src/main.tsx`, then redeploy. Until then, keep the current `/soundledger-landing-page/` base so assets resolve on `*.github.io`.

### Note on private repositories

GitHub Pages on **private** repos requires a paid GitHub plan. For free hosting, make the repository **public**, or upgrade the account/org.

## Project Structure

```
src/
  assets/              Brand assets (logo)
  components/          Shared UI: Navbar, Footer, Container, Reveal, HeroVisual
  components/sections/ Landing page sections (Hero, About, Products, Why, Artist, Partners)
  pages/               Route-level pages (Landing, Privacy Policy, Terms of Service)
scripts/               Build helpers (GitHub Pages 404 copy)
public/                Static assets, favicon, CNAME, robots.txt, sitemap.xml
```

## Content Sections

1. **Hero** — Primary headline, CTA to SplitSheet, abstract collaboration-network visual.
2. **About** — Company positioning and core problem pillars.
3. **Product Ecosystem** — SplitSheet (flagship Rights-as-a-Service platform).
4. **Why SoundLedger** — Problem vs. solution comparison.
5. **SoundLedger Artist** — The creative/cultural arm of the brand.
6. **Partners & Investors** — Credibility section targeting investors, labels, and technology partners.
7. **Footer** — Company, legal, and social links.

## SEO

Metadata, Open Graph tags, Twitter card tags, and JSON-LD structured data are configured in `index.html`.
Update `robots.txt` and `sitemap.xml` in `public/` if new routes are added.

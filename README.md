# Victor's School Website

Static multi-page website for ROCKSTAR Study Abroad.

## Project structure

- `index.html` – home page
- `about/about-us.html`
- `programs/programs.html`
- `destination/destination.html`
- `events/events.html`
- `faq/faq.html`
- `contact/contact.html`

All routes and asset links use lowercase paths to avoid issues on case-sensitive hosting (Linux-based servers).

## Hostinger deployment (from GitHub)

This project is prepared for Hostinger static hosting:

- entry file is `index.html`
- internal links use lowercase paths
- Apache config is provided in `.htaccess`

### Option A: Hostinger Git deployment (recommended)

1. Push this repository to GitHub (`main` branch).
2. In Hostinger hPanel, open your website hosting and go to **Git** (or **Advanced -> Git**).
3. Add repository URL: `https://github.com/<your-user>/<your-repo>.git`.
4. Branch: `main`.
5. Deployment path: `public_html`.
6. Click Deploy / Pull latest changes.

### Option B: GitHub Actions to Hostinger FTP (if Git deploy is unavailable)

Use a GitHub Actions workflow to upload files from `main` to Hostinger via FTP/SFTP.
Store credentials in repository secrets and deploy into `public_html`.

## Local preview

You can open `index.html` directly in a browser.

For a local server (recommended), use any static file server and open:

- `http://localhost:<port>/index.html`

## Deployment options

### Generic static hosts (optional)

Any host that serves static files from repository root works. No build step is required.

## Pre-deploy checklist

- [x] Internal file path casing normalized (`about`, `events`, `faq`, `about-us.*`)
- [x] `Index.html` references normalized to `index.html`
- [x] Navigation links updated across all pages
- [x] Hostinger-compatible `.htaccess` added

## Recent optimization updates (March 2026)

The following improvements were implemented to raise Lighthouse scores for Performance, Accessibility, SEO, and Best Practices.

### Performance improvements

- Implemented centralized lazy loading in `main.js` for off-screen images:
	- sets `loading="lazy"` for offscreen images
	- keeps above-the-fold/hero images eager
	- applies `decoding="async"` and `fetchpriority` hints
- Removed duplicate Swiper CSS include from `index.html`.
- Added DNS-prefetch and preconnect hints for third-party origins:
	- `cdn.jsdelivr.net`
	- `unicons.iconscout.com`
	- `elfsightcdn.com`
- Deferred local scripts on homepage (`main.js`, `index.js`).
- Added hero image preload (`female bpp student.jpg`) for faster LCP.
- Added `content-visibility: auto` and `contain-intrinsic-size` for below-the-fold sections in `index.css`.
- Removed invalid trailing markup (duplicate `</body>` and extra floating WhatsApp block) from `index.html`.

### JavaScript loading strategy

- Reworked `index.js` to lazy-load Swiper only when the testimonials section approaches viewport using `IntersectionObserver`.
- Added fallback behavior for browsers without `IntersectionObserver`.
- Avoided duplicate script injection and guarded one-time initialization.

### Third-party script optimization

- Removed eager Elfsight script include from `index.html`.
- Added lazy Elfsight loader in `main.js` to inject `https://elfsightcdn.com/platform.js` only when widget is near viewport.

### Accessibility improvements

- Added keyboard-accessible skip link (`Skip to main content`).
- Added semantic main landmark (`<main id="main-content">`).
- Added `aria-label` and `type="button"` to navigation/theme controls.
- Improved key image `alt` text on homepage hero/about images.
- Adjusted nav logo heading structure to reduce heading/semantic noise.

### SEO improvements

- Updated homepage `<title>` and metadata.
- Added:
	- `meta name="robots" content="index, follow"`
	- `meta name="theme-color"`
	- canonical URL tag
	- `og:url`

### Best practices hardening

- Ensured external links with `target="_blank"` use `rel="noopener noreferrer"`.
- Replaced placeholder social links (`javascript:void(0)`) with real external URLs.

### Typography/rendering optimization

- Removed blocking Google Fonts `@import` from `style.css`.
- Switched to a fast system font stack for quicker first paint.

### Files updated during optimization

- `index.html`
- `index.css`
- `style.css`
- `main.js`
- `index.js`

> Note: Update the canonical URL in `index.html` if your production domain differs from `https://rockstarstudyabroad.com/`.

## Lighthouse score tracking template

Use this section to track homepage audits over time.

| Date | Environment | Performance | Accessibility | Best Practices | SEO | Notes |
|------|-------------|------------:|--------------:|---------------:|----:|-------|
| 2026-03-12 (before) | Local/Preview | _fill_ | _fill_ | _fill_ | _fill_ | Baseline before optimization pass |
| 2026-03-12 (after) | Local/Preview | 93 | _fill_ | 77 | 82 | After lazy loading, script deferral, SEO/a11y updates |

### Optional release checklist

- [ ] Run Lighthouse in Incognito (mobile + desktop)
- [ ] Save screenshot/report JSON for record
- [ ] Update this table with new scores
- [ ] Note key code changes that affected metrics

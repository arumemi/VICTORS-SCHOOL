# Victor's School Website

Static multi-page website for Rock Star Study Abroad.

## Project structure

- `index.html` – home page
- `about/about-us.html`
- `programs/programs.html`
- `destination/destination.html`
- `events/events.html`
- `faq/faq.html`
- `contact/contact.html`

All routes and asset links use lowercase paths to avoid issues on case-sensitive hosting (Linux-based servers).

## Local preview

You can open `index.html` directly in a browser.

For a local server (recommended), use any static file server and open:

- `http://localhost:<port>/index.html`

## Deployment options

### Netlify
1. Create a new site from this repository.
2. Build command: *(leave empty)*
3. Publish directory: `.`

### Vercel
1. Import the project.
2. Framework preset: `Other`.
3. Output directory: `.`

### GitHub Pages
1. Push to GitHub.
2. In repository settings, enable Pages from the `main` branch root.
3. Site entry point is `index.html`.

## Pre-deploy checklist

- [x] Internal file path casing normalized (`about`, `events`, `faq`, `about-us.*`)
- [x] `Index.html` references normalized to `index.html`
- [x] Navigation links updated across all pages

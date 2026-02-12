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

# Hostinger Deployment Guide (GitHub)

This project is static and deploys directly from repository files.

## 1) Prerequisites

- Hostinger hosting plan with domain connected
- GitHub repository containing this project
- Branch to deploy: `main`

## 2) Deploy via Hostinger Git (recommended)

1. Open **hPanel**.
2. Go to your website hosting -> **Git** (or **Advanced -> Git**).
3. Click **Create Repository** (or equivalent).
4. Repository URL: `https://github.com/<username>/<repo>.git`
5. Branch: `main`
6. Deployment path: `public_html`
7. Save and click **Deploy**.

After each new push to GitHub, run **Pull/Deploy latest** in hPanel.

## 3) Ensure document root

- In Hostinger, your web root should be `public_html`.
- This repository should be deployed directly into that folder.

## 4) DNS and SSL

- Point your domain to Hostinger nameservers (or A record to Hostinger IP).
- Enable SSL in Hostinger for HTTPS.
- Verify both:
  - `https://yourdomain.com`
  - `https://www.yourdomain.com`

## 5) Project behaviors already prepared

- Lowercase file/folder paths for Linux case sensitivity
- Canonical redirects for old uppercase routes in `.htaccess`
- `index.html` as default entry page
- Basic cache/security headers in `.htaccess`

## 6) Quick post-deploy smoke test

Check these URLs:

- `/`
- `/index.html`
- `/about/about-us.html`
- `/programs/programs.html`
- `/destination/destination.html`
- `/events/events.html`
- `/faq/faq.html`
- `/contact/contact.html`

Also test old links redirect correctly:

- `/Index.html` -> `/index.html`
- `/ABOUT/ABOUT-us.html` -> `/about/about-us.html`

## 7) If Git deployment is not available on your plan

Use GitHub Actions + FTP/SFTP deploy to `public_html` as an alternative.

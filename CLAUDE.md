# True Group Partners (TGP) website

Marketing site for True Group Partners, an outsourced accounting and CFO firm in Los Angeles.
Developer: Nate Hoang. Client contact sends change requests by email.

## Stack and deploy
- `client/`: React 18 + Vite 5 + Tailwind, React Router (routes in `client/src/main.jsx`, non-home pages lazy-loaded).
- `server/`: Express + Nodemailer (Gmail). Serves `client/dist` in production.
- Deploy: push to the GitHub `staging` branch → staging Heroku app; `main` → production (`heroku` remote).
- Local dev: `npm run dev` at the root (server on 3001, Vite proxies `/send-message`, `/send-employment`, `/api`).
- Build: `cd client && npm run build` (also writes `public/sitemap.xml` + `robots.txt`).
- The project folder sits in iCloud-synced Desktop; evicted files can cause "Resource deadlock avoided" read errors.
  If that happens, clone from GitHub (`n8hoang/True-Group-Partners`) and work in the clone.

## Environment variables
Server: `EMAIL`, `EMAIL_PW` (Gmail app password), `SEND_TO` (TGP inbox for notifications),
optional `HUBSPOT_ACCESS_TOKEN` and/or `LEADS_WEBHOOK_URL` (lead storage, see `server/leads/leadStore.js`).
Client (build time, set as Heroku config vars): `VITE_SITE_URL`, `VITE_SITE_ENV=staging` on staging only,
optional `VITE_SCHEDULING_URL` (Calendly etc.; consultation buttons go there instead of /contact),
optional `VITE_GA_ID` (GA4).

## Positioning rules (from the client — keep these)
- TGP is a **full-service outsourced accounting and CFO firm for growing businesses across many industries**.
  Life sciences / NIH-SBIR grant accounting is a *featured specialty*, never the primary focus of the homepage.
- Keep the navy/teal/white palette (`--navy #0a1628`, `--teal #00b4a0`), Outfit font, TGP logo, overall structure.
- Use line icons from `react-icons/tb` (Tabler). No emoji icons.
- Distinguish services TGP performs directly from work coordinated through outside specialists (tax is "coordination").
- The grant consultation is "an introductory consultation, not a formal audit or compliance certification".
- Videos are AI-narrated with graphics; Sarah does not appear on camera.

## Where content lives
- Homepage: `client/src/pages/Home.jsx` (services, stats, testimonials, industries arrays at the top).
- Life Sciences: `client/src/pages/LifeSciences.jsx` (Sarah bio, 6 service cards).
- Videos are currently hidden site-wide (`SHOW_VIDEOS = false` in `client/src/data/videos.js`) per John, Nov 2026 — flip to true once videos exist.
- Video library: `client/src/data/videos.js` — publish a video by setting `embedUrl`, `uploadDate`, `duration`,
  `description`, `transcript`. Published videos get `/life-sciences/videos/<slug>`, VideoObject schema, sitemap entry.
  Unpublished: placeholders on staging, compact "Coming Soon" list on live.
- Checklist lead form → `POST /api/checklist` in `server/server.js`. PDF goes at
  `server/assets/NIH-SBIR-Accounting-Readiness-Checklist.pdf`.
- Per-page SEO: `useSeo()` from `client/src/helpers/seo.js`. Analytics events: `client/src/helpers/analytics.js`.
- CTA buttons: `components/CtaLink.jsx` → `/contact?topic=grant-review|sarah|life-sciences|consultation` pre-fills the form.

## Open items waiting on TGP (update as resolved)
- [ ] Verify stats (30+ yrs, 200+ companies, $100M+ fundraising, Seed→IPO)
- [ ] Confirm testimonials are real, approved client statements
- [ ] Approve client logos (homepage ticker currently leans life sciences)
- [ ] Confirm service descriptions = direct vs coordinated work
- [ ] Sarah approves bio + title "Partner, Life Sciences & Grant Accounting"
- [ ] Final 20-question checklist PDF
- [ ] Lead storage choice (HubSpot / Google Sheet) and scheduling tool (Calendly?)
- [ ] Privacy policy page (checklist form references data use)
- [ ] GA4 property ID; canonical domain (www or not)
- [ ] Video scripts from Sarah → produce videos
- [ ] Confirm "Diamond Elyte" is the right display name (site is branded EliteLyfe)

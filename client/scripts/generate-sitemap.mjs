// Writes public/sitemap.xml before each build, including a page for every
// published video in src/data/videos.js. Runs automatically via `npm run build`.
import { writeFileSync } from 'node:fs'
import { allVideos, isPublished, videoPath } from '../src/data/videos.js'

const SITE_URL = (process.env.VITE_SITE_URL || 'https://truegrouppartners.com').replace(/\/$/, '')
const staticPaths = ['/', '/services', '/life-sciences', '/overview', '/featured', '/employment', '/contact']
const paths = [...staticPaths, ...allVideos.filter(isPublished).map(videoPath)]
const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(p => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)

// Staging should never be indexed; live allows everything.
const staging = process.env.VITE_SITE_ENV === 'staging'
writeFileSync(new URL('../public/robots.txt', import.meta.url),
  staging ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log(`sitemap.xml: ${paths.length} URLs${staging ? ' (staging robots: noindex)' : ''}`)

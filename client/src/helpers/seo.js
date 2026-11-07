import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from './siteConfig'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!content) { if (el) el.remove(); return }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page SEO: title, meta description, canonical, Open Graph and JSON-LD.
 *   useSeo({ title, description, path, jsonLd })
 * `jsonLd` may be an object or an array of objects (falsy entries are skipped).
 */
export function useSeo({ title, description, path = '/', jsonLd = null, image = null, type = 'website' }) {
  const ld = JSON.stringify(jsonLd)
  useEffect(() => {
    const fullTitle = title ? (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`) : SITE_NAME
    const url = `${SITE_URL}${path}`
    document.title = fullTitle
    setMeta('name', 'description', description)
    setCanonical(url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')

    document.head.querySelectorAll('script[data-page-jsonld]').forEach(s => s.remove())
    const blocks = [].concat(jsonLd || []).filter(Boolean)
    blocks.forEach(block => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.pageJsonld = 'true'
      s.textContent = JSON.stringify(block)
      document.head.appendChild(s)
    })
  }, [title, description, path, ld, image, type])
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: SITE_NAME,
  url: SITE_URL,
  telephone: '+1-818-822-8310',
  email: 'info@truegrouppartners.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3680 Wilshire Blvd, Suite 1093',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90010',
    addressCountry: 'US',
  },
}

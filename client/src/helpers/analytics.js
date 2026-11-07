import { GA_ID } from './siteConfig'

// Lightweight GA4 wrapper. If VITE_GA_ID is not set, events are still pushed
// to window.dataLayer so a Google Tag Manager container can pick them up.
//
// Events sent by the site:
//   page_view                 every route change
//   video_start               visitor presses play on an embedded video
//   checklist_cta_click       any "Download the checklist" button
//   checklist_download        checklist form submitted successfully (also sends generate_lead)
//   consultation_cta_click    any consultation / "Talk With Sarah" / review button
//   consultation_request      contact form submitted from a consultation CTA (also generate_lead)
//   contact_form_submit       regular contact form submitted (also generate_lead)

let initialized = false

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true
  window.dataLayer = window.dataLayer || []
  if (!GA_ID) return
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

export function track(event, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params)
    } else {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event, ...params })
    }
  } catch (_) { /* never let analytics break the page */ }
  if (import.meta.env.DEV) console.debug('[analytics]', event, params)
}

export function trackPageView(path) {
  track('page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

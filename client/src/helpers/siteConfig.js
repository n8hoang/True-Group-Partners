// Central site settings. Values come from Vite env vars at build time
// (set them as Heroku config vars on each app — staging and production).
//
//   VITE_SITE_URL        canonical origin, e.g. https://truegrouppartners.com
//   VITE_SITE_ENV        'staging' on the staging app; anything else = live
//   VITE_SCHEDULING_URL  optional Calendly / HubSpot Meetings link. When set,
//                        consultation buttons open it instead of /contact.
//   VITE_GA_ID           optional GA4 measurement ID (G-XXXXXXX)

export const SITE_NAME = 'True Group Partners'
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://truegrouppartners.com').replace(/\/$/, '')
export const IS_STAGING = import.meta.env.DEV || import.meta.env.VITE_SITE_ENV === 'staging'
export const SCHEDULING_URL = import.meta.env.VITE_SCHEDULING_URL || ''
export const GA_ID = import.meta.env.VITE_GA_ID || ''

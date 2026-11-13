// ─────────────────────────────────────────────────────────────────────────
// Life Sciences video library — the single place to publish a video.
//
// To publish a finished video, fill in on its entry:
//   embedUrl     YouTube or Vimeo link (watch / share / embed URLs all work)
//   uploadDate   'YYYY-MM-DD' (needed for Google video rich results)
//   duration     ISO-8601, e.g. 'PT6M30S'
//   description  1–2 sentence summary (shown on cards + used for SEO)
//   transcript   full transcript; blank lines separate paragraphs
//   thumbnailUrl only needed for Vimeo (YouTube thumbnails are automatic)
//
// A video counts as published as soon as `embedUrl` is set. Published videos
// get their own page at /life-sciences/videos/<slug>, appear first in the
// library, and emit VideoObject structured data. Unpublished videos show as
// placeholders on staging and in the compact "Coming Soon" list on the live site.
//
// cta: 'checklist' | 'consultation' | 'sarah' — the call to action shown after it.
// ─────────────────────────────────────────────────────────────────────────

// Master switch for all video content on the site (Life Sciences featured video,
// video library, "Watch" button and /life-sciences/videos/* pages).
// Off until TGP has finished videos — flip to true to bring everything back.
export const SHOW_VIDEOS = false

export const VIDEO_CATEGORIES = [
  { id: 'grant-accounting', title: 'Grant Accounting & Compliance' },
  { id: 'funding-growth', title: 'Funding & Growth' },
  { id: 'financial-operations', title: 'Financial Operations & Leadership' },
]

export const featuredVideo = {
  slug: 'nih-sbir-grant-now-what',
  title: 'We Received an NIH/SBIR Grant. Now What?',
  category: 'grant-accounting',
  durationLabel: '5–7 min',
  embedUrl: '',
  uploadDate: '',
  duration: '',
  thumbnailUrl: '',
  description:
    'A short explainer on the five accounting areas every early-stage life sciences company should address right after receiving an NIH or SBIR/STTR award.',
  transcript: '',
  cta: 'checklist',
  topics: [
    { title: 'Separate grant activity appropriately', desc: 'Know which expenses relate to which funding source.' },
    { title: 'Establish timekeeping and payroll allocation', desc: "Don't try to reconstruct everything months later." },
    { title: 'Understand direct and indirect costs', desc: 'Your accounting structure should support how expenses are categorized and reported.' },
    { title: 'Maintain documentation contemporaneously', desc: "The time to establish documentation procedures isn't when someone asks to review historical expenses." },
    { title: 'Integrate grant reporting with your normal accounting', desc: "Grant records, financial statements and management reporting shouldn't live in disconnected systems." },
  ],
}

const blank = { embedUrl: '', uploadDate: '', duration: '', thumbnailUrl: '', description: '', transcript: '' }

export const libraryVideos = [
  // Grant Accounting & Compliance
  { ...blank, slug: 'grant-accounting-mistakes', category: 'grant-accounting', cta: 'checklist',
    title: '5 Grant Accounting Mistakes Life Sciences Startups Make' },
  { ...blank, slug: 'employee-time-and-payroll', category: 'grant-accounting', cta: 'checklist',
    title: 'Employee Time & Payroll: What Grant-Funded Companies Should Have in Place' },
  { ...blank, slug: 'direct-vs-indirect-costs', category: 'grant-accounting', cta: 'checklist',
    title: 'Direct vs. Indirect Costs for Life Sciences Founders' },
  { ...blank, slug: 'books-ready-for-nih-review', category: 'grant-accounting', cta: 'consultation',
    title: 'Are Your Books Ready for an NIH Review?' },

  // Funding & Growth
  { ...blank, slug: 'vc-money-and-nih-funding', category: 'funding-growth', cta: 'consultation',
    title: 'Managing VC Money and NIH Funding in the Same Company' },
  { ...blank, slug: 'finance-checklist-before-fundraise', category: 'funding-growth', cta: 'consultation',
    title: 'The Finance Checklist Before Your Next Fundraise' },

  // Financial Operations & Leadership
  { ...blank, slug: 'when-biotech-needs-controller', category: 'financial-operations', cta: 'sarah',
    title: 'When Does a Biotech Startup Need a Controller?' },
  { ...blank, slug: 'when-life-sciences-needs-cfo', category: 'financial-operations', cta: 'sarah',
    title: 'When Does a Life Sciences Company Need a CFO?' },
  { ...blank, slug: 'board-and-investor-reporting', category: 'financial-operations', cta: 'consultation',
    title: 'What Your Board and Investors Should Be Getting From Finance' },
]

export const allVideos = [featuredVideo, ...libraryVideos]

export const isPublished = v => Boolean(SHOW_VIDEOS && v && v.embedUrl)

export const videoPath = v => `/life-sciences/videos/${v.slug}`

export const categoryTitle = id => (VIDEO_CATEGORIES.find(c => c.id === id) || {}).title || ''

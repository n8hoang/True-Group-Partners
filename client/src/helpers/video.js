import { SITE_NAME, SITE_URL } from './siteConfig'
import { videoPath } from '../data/videos'

/** Parse a YouTube / Vimeo URL in any common form. */
export function parseVideoUrl(url = '') {
  if (!url) return null
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/)
  if (yt) return { provider: 'youtube', id: yt[1] }
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/)
  if (vm) return { provider: 'vimeo', id: vm[1], hash: vm[2] }
  return { provider: 'other', url }
}

/** Embed URL with captions on by default. */
export function embedSrc(url, { autoplay = false } = {}) {
  const v = parseVideoUrl(url)
  if (!v) return ''
  if (v.provider === 'youtube') {
    const p = new URLSearchParams({ rel: '0', modestbranding: '1', cc_load_policy: '1', enablejsapi: '1', playsinline: '1' })
    if (autoplay) p.set('autoplay', '1')
    return `https://www.youtube.com/embed/${v.id}?${p}`
  }
  if (v.provider === 'vimeo') {
    const p = new URLSearchParams({ texttrack: 'en', dnt: '1' })
    if (v.hash) p.set('h', v.hash)
    if (autoplay) p.set('autoplay', '1')
    return `https://player.vimeo.com/video/${v.id}?${p}`
  }
  return v.url
}

export function thumbnailFor(video) {
  if (video.thumbnailUrl) return video.thumbnailUrl
  const v = parseVideoUrl(video.embedUrl)
  if (v && v.provider === 'youtube') return `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
  return ''
}

/** schema.org VideoObject — only returned when Google's required fields exist. */
export function videoJsonLd(video) {
  const thumb = thumbnailFor(video)
  if (!video.embedUrl || !video.uploadDate || !thumb) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description || video.title,
    thumbnailUrl: [thumb],
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    embedUrl: embedSrc(video.embedUrl),
    url: `${SITE_URL}${videoPath(video)}`,
    ...(video.transcript && { transcript: video.transcript }),
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
}

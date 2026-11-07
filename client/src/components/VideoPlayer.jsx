import { useState } from 'react'
import { TbPlayerPlayFilled, TbClock } from 'react-icons/tb'
import { embedSrc, thumbnailFor } from '../helpers/video'
import { track } from '../helpers/analytics'

/**
 * Responsive 16:9 video. Published videos load as a lightweight click-to-play
 * preview (faster on mobile); the real player loads on tap with captions on.
 * Unpublished videos render a "coming soon" placeholder.
 */
export default function VideoPlayer({ video, size = 'large' }) {
  const [playing, setPlaying] = useState(false)
  const large = size === 'large'
  const thumb = video.embedUrl ? thumbnailFor(video) : ''

  if (video.embedUrl && playing) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', background: '#000' }}>
        <iframe
          src={embedSrc(video.embedUrl, { autoplay: true })}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  const published = Boolean(video.embedUrl)
  const Wrapper = published ? 'button' : 'div'

  return (
    <Wrapper
      type={published ? 'button' : undefined}
      onClick={published ? () => { setPlaying(true); track('video_start', { video_title: video.title, video_slug: video.slug }) } : undefined}
      aria-label={published ? `Play video: ${video.title}` : undefined}
      className="relative block w-full rounded-xl overflow-hidden text-left group"
      style={{
        paddingTop: '56.25%',
        background: 'linear-gradient(135deg, #0a1628 0%, #122040 55%, #1e3a5f 100%)',
        border: published ? 'none' : '1px dashed rgba(255,255,255,0.25)',
      }}
    >
      {thumb && <img src={thumb} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
      {thumb && <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.35)' }} />}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div
          className={`rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-105 ${large ? 'w-16 h-16 md:w-20 md:h-20' : 'w-11 h-11'}`}
          style={{ background: published ? 'var(--teal)' : 'rgba(0,180,160,0.18)', border: '2px solid var(--teal)' }}
        >
          <TbPlayerPlayFilled size={large ? 28 : 16} color={published ? '#fff' : 'var(--teal)'} style={{ marginLeft: 3 }} />
        </div>
        {!thumb && (
          <>
            <p className={`text-white font-semibold ${large ? 'text-base md:text-lg' : 'text-sm'}`}>{video.title}</p>
            <p className="text-xs mt-1 uppercase tracking-widest inline-flex items-center gap-1" style={{ color: 'var(--teal)' }}>
              {!published && <TbClock size={12} />}
              {published ? 'Watch now' : `Video coming soon${video.durationLabel ? ` · ${video.durationLabel}` : ''}`}
            </p>
          </>
        )}
      </div>
    </Wrapper>
  )
}

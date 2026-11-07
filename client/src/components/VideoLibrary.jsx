import { Link } from 'react-router-dom'
import { TbPlayerPlayFilled, TbClock, TbArrowRight } from 'react-icons/tb'
import { VIDEO_CATEGORIES, libraryVideos, isPublished, videoPath } from '../data/videos'
import { thumbnailFor } from '../helpers/video'
import { IS_STAGING } from '../helpers/siteConfig'

function Thumb({ video, published }) {
  const thumb = published ? thumbnailFor(video) : ''
  return (
    <div className="relative flex-shrink-0 w-28 sm:w-full rounded-lg overflow-hidden"
      style={{ aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #0a1628 0%, #122040 55%, #1e3a5f 100%)',
        border: published ? 'none' : '1px dashed rgba(255,255,255,0.25)' }}>
      {thumb && <img src={thumb} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
          style={{ background: published ? 'var(--teal)' : 'rgba(0,180,160,0.18)', border: '2px solid var(--teal)' }}>
          {published ? <TbPlayerPlayFilled size={14} color="#fff" style={{ marginLeft: 2 }} /> : <TbClock size={14} color="var(--teal)" />}
        </span>
      </div>
    </div>
  )
}

/** Compact card: horizontal on mobile, stacked on larger screens. */
function VideoCard({ video }) {
  const published = isPublished(video)
  const body = (
    <div className="flex sm:flex-col gap-3 sm:gap-3 h-full">
      <Thumb video={video} published={published} />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--navy)' }}>{video.title}</p>
        {published && video.description && (
          <p className="text-xs mt-1 leading-snug line-clamp-2" style={{ color: 'var(--gray-600)' }}>{video.description}</p>
        )}
        <p className="text-xs mt-1.5 font-semibold uppercase tracking-wider inline-flex items-center gap-1"
          style={{ color: published ? 'var(--teal)' : 'var(--gray-400)' }}>
          {published ? <>Watch + transcript <TbArrowRight /></> : 'Coming soon'}
        </p>
      </div>
    </div>
  )
  const cls = 'block p-3 rounded-xl border h-full transition-shadow hover:shadow-md'
  const style = { borderColor: '#eef0f5', background: '#fff' }
  return published
    ? <Link to={videoPath(video)} className={cls} style={style}>{body}</Link>
    : <div className={cls} style={style}>{body}</div>
}

export default function VideoLibrary() {
  const published = libraryVideos.filter(isPublished)
  const upcoming = libraryVideos.filter(v => !isPublished(v))
  // Staging: every category shows its videos (published first, then placeholders).
  // Live: only published videos get cards; the rest go in a compact Coming Soon list.
  const showPlaceholders = IS_STAGING

  const categories = VIDEO_CATEGORIES.map(cat => ({
    ...cat,
    videos: [
      ...published.filter(v => v.category === cat.id),
      ...(showPlaceholders ? upcoming.filter(v => v.category === cat.id) : []),
    ],
  })).filter(cat => cat.videos.length > 0)

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.id} className="mb-8 md:mb-10">
          <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-3" style={{ color: 'var(--navy)' }}>
            <span className="w-6 h-0.5 inline-block" style={{ background: 'var(--teal)' }} />
            {cat.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {cat.videos.map(v => <VideoCard key={v.slug} video={v} />)}
          </div>
        </div>
      ))}

      {!showPlaceholders && upcoming.length > 0 && (
        <div className="rounded-xl p-5 md:p-6 border" style={{ background: 'var(--gray-50)', borderColor: '#eef0f5' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2" style={{ color: 'var(--teal)' }}>
            <TbClock size={14} /> Coming Soon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VIDEO_CATEGORIES.map(cat => {
              const items = upcoming.filter(v => v.category === cat.id)
              if (!items.length) return null
              return (
                <div key={cat.id}>
                  <p className="text-sm font-bold mb-2" style={{ color: 'var(--navy)' }}>{cat.title}</p>
                  <ul className="space-y-1.5">
                    {items.map(v => (
                      <li key={v.slug} className="text-sm leading-snug" style={{ color: 'var(--gray-600)' }}>{v.title}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

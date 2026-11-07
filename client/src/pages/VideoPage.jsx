import { Link, Navigate, useParams } from 'react-router-dom'
import { TbArrowLeft } from 'react-icons/tb'
import useReveal from '../helpers/useReveal'
import { useSeo } from '../helpers/seo'
import { videoJsonLd, thumbnailFor } from '../helpers/video'
import { IS_STAGING } from '../helpers/siteConfig'
import { allVideos, isPublished, categoryTitle, videoPath } from '../data/videos'
import VideoPlayer from '../components/VideoPlayer'
import Transcript from '../components/Transcript'
import VideoCta from '../components/VideoCta'

/** /life-sciences/videos/:slug — one page per published video (description, transcript, CTA). */
function VideoPage() {
  const { slug } = useParams()
  const video = allVideos.find(v => v.slug === slug)
  const viewable = video && (isPublished(video) || IS_STAGING)
  useReveal([slug])

  useSeo({
    title: video ? video.title : 'Video',
    description: (video && video.description) || 'Educational video for life sciences and grant-funded companies from True Group Partners.',
    path: video ? videoPath(video) : '/life-sciences',
    jsonLd: video && isPublished(video) ? videoJsonLd(video) : null,
    image: video ? thumbnailFor(video) || null : null,
    type: 'video.other',
  })

  if (!viewable) return <Navigate to="/life-sciences#video" replace />

  const related = allVideos.filter(v => v.slug !== video.slug && v.category === video.category && isPublished(v)).slice(0, 3)

  return (
    <div className="overflow-x-hidden" style={{ background: '#fff' }}>
      <section className="hero-gradient pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <Link to="/life-sciences" className="hover:underline">Life Sciences</Link>
            <span className="mx-2">/</span>
            <Link to="/life-sciences#video" className="hover:underline">Videos</Link>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: 'var(--teal)' }}>
            {categoryTitle(video.category)}
          </span>
          <h1 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)' }}>{video.title}</h1>
          {!isPublished(video) && (
            <p className="mt-3 text-xs uppercase tracking-widest" style={{ color: 'var(--gold)' }}>Staging preview — not yet published</p>
          )}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6">
          <VideoPlayer video={video} />
          {video.description && (
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>About this video</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--gray-600)' }}>{video.description}</p>
            </div>
          )}
          <Transcript text={video.transcript} defaultOpen />
          <div className="mt-8"><VideoCta kind={video.cta} location={`video_page_${video.slug}`} /></div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--navy)' }}>More in {categoryTitle(video.category)}</h2>
              <ul className="space-y-2">
                {related.map(v => (
                  <li key={v.slug}><Link to={videoPath(v)} className="font-semibold hover:underline" style={{ color: 'var(--teal)' }}>{v.title}</Link></li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/life-sciences#video" className="inline-flex items-center gap-2 mt-10 text-sm font-semibold" style={{ color: 'var(--navy)' }}>
            <TbArrowLeft /> Back to the video library
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VideoPage

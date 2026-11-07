import { TbChevronDown, TbFileText } from 'react-icons/tb'

/** Collapsible transcript. Text stays in the page so search engines can index it. */
export default function Transcript({ text, defaultOpen = false, dark = false }) {
  if (!text) return null
  const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
  return (
    <details open={defaultOpen} className="transcript rounded-xl border mt-4"
      style={{ borderColor: dark ? 'rgba(255,255,255,0.12)' : '#eef0f5', background: dark ? 'rgba(255,255,255,0.04)' : 'var(--gray-50)' }}>
      <summary className="flex items-center justify-between gap-3 cursor-pointer px-5 py-3 text-sm font-semibold"
        style={{ color: dark ? '#fff' : 'var(--navy)' }}>
        <span className="inline-flex items-center gap-2"><TbFileText size={18} color="var(--teal)" /> Read the transcript</span>
        <TbChevronDown className="transcript-chevron" size={18} />
      </summary>
      <div className="px-5 pb-5 space-y-3 text-sm leading-relaxed" style={{ color: dark ? 'rgba(255,255,255,0.75)' : 'var(--gray-600)' }}>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </details>
  )
}

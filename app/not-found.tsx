import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export default function NotFound() {
  return (
    <main
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5"
      style={{ background: 'var(--cream)' }}
    >
      <p className="text-[0.6rem] tracking-[0.4em] uppercase font-medium mb-6" style={{ color: 'var(--olive)' }}>
        404
      </p>
      <h1
        className="font-serif font-light leading-tight mb-5"
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--espresso)' }}
      >
        Səhifə<br />
        <em className="italic" style={{ color: 'var(--olive)' }}>tapılmadı</em>
      </h1>
      <p className="text-sm leading-relaxed max-w-xs mb-10" style={{ color: 'var(--espresso)', opacity: 0.5 }}>
        Axtardığınız səhifə mövcud deyil və ya köçürülüb.
      </p>
      <Link href="/" className="btn-olive">
        <ArrowLeft size={14} weight="bold" />
        Ana Səhifəyə qayıt
      </Link>
    </main>
  )
}

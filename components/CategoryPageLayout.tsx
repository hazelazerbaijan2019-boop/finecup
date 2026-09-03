import type { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  title: string
  description: string
  count: number
  children: ReactNode
  heroImage?: string
}

export default function CategoryPageLayout({ title, description, count, children, heroImage }: Props) {
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Hero image (optional) */}
      {heroImage && (
        <div className="relative h-[38vh] min-h-[240px] overflow-hidden" style={{ background: 'var(--espresso)' }}>
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-10">
            <p className="section-label mb-2" style={{ color: 'var(--olive-light)' }}>Kataloq</p>
            <h1 className="font-serif text-[2.2rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--cream)' }}>
              {title}
            </h1>
          </div>
        </div>
      )}

      {/* Page header (if no hero) */}
      {!heroImage && (
        <div className="border-b" style={{ borderColor: 'var(--cream-dark)' }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="section-label mb-3">Kataloq</p>
                <h1 className="font-serif text-[2.4rem] md:text-[3rem] font-light tracking-tight" style={{ color: 'var(--espresso)' }}>
                  {title}
                </h1>
                <p className="mt-2 text-[0.8rem]" style={{ color: 'var(--espresso)', opacity: 0.55 }}>{description}</p>
              </div>
              <p className="text-[0.72rem] tabular-nums flex-shrink-0 font-medium" style={{ color: 'var(--espresso)', opacity: 0.4 }}>
                {count} məhsul
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sub-header when hero present */}
      {heroImage && (
        <div className="border-b" style={{ borderColor: 'var(--cream-dark)' }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex items-center justify-between">
            <p className="text-[0.78rem]" style={{ color: 'var(--espresso)', opacity: 0.55 }}>{description}</p>
            <p className="text-[0.72rem] tabular-nums font-medium" style={{ color: 'var(--espresso)', opacity: 0.4 }}>
              {count} məhsul
            </p>
          </div>
        </div>
      )}

      {/* Products */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-14">
        {children}
      </div>
    </main>
  )
}

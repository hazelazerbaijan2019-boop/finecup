'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import { categories } from '@/lib/products'
import Reveal from '@/components/Reveal'

const catImages: Record<string, string> = {
  qehve:    '/images/fc-sacks.jpg',
  sirop:    '/images/fc-hazelnut-syrup.jpg',
  cay:      '/images/tea-matcha.jpg',
  avadanliq: '/images/fc-roaster-panel.jpg',
  kimyevi:  '/images/chem-descaler.jpg',
}

export default function CategoriesClient() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--espresso)' }}>
      {/* Full-screen hover background */}
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{ opacity: hoveredCat === cat.id ? 1 : 0 }}
        >
          <Image
            src={catImages[cat.id]}
            alt={cat.label}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(27,19,9,0.72)' }} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[0.6rem] tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: 'var(--olive-light)' }}>
              Kateqoriyalar
            </p>
            <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--cream)' }}>
              Nə axtarırsınız?
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 70}>
              <Link
                href={cat.href}
                onMouseEnter={() => setHoveredCat(cat.id)}
                onMouseLeave={() => setHoveredCat(null)}
                className="cat-card group block relative overflow-hidden"
                style={{ aspectRatio: '3/4', background: 'var(--espresso-mid)' }}
              >
                <Image
                  src={catImages[cat.id]}
                  alt={cat.label}
                  fill
                  className="object-cover product-img opacity-55 group-hover:opacity-75 transition-opacity duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <ArrowUpRight
                    size={16}
                    className="self-end text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">{cat.label}</h3>
                    <p className="text-[0.65rem] mt-0.5 leading-snug hidden sm:block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

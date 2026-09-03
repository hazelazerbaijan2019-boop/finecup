'use client'

import { useState, useMemo } from 'react'
import { MagnifyingGlass, X } from '@phosphor-icons/react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const filters = [
  { label: 'Hamısı', cat: null as string | null },
  { label: 'Qəhvə', cat: 'qehve' },
  { label: 'Sirop', cat: 'sirop' },
  { label: 'Çay', cat: 'cay' },
  { label: 'Avadanlıq', cat: 'avadanliq' },
  { label: 'Kimyəvi', cat: 'kimyevi' },
]

export default function KatalogPage() {
  const [activeCat, setActiveCat] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let list = activeCat ? products.filter((p) => p.category === activeCat) : products
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.notes?.toLowerCase().includes(q)) ||
          p.categoryLabel.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCat, query])

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="section-label mb-3">Kataloq</p>
              <h1 className="font-serif text-[2.4rem] md:text-[3rem] font-light tracking-tight" style={{ color: 'var(--espresso)' }}>
                Bütün məhsullar
              </h1>
            </div>
            <p
              className="text-[0.72rem] tabular-nums flex-shrink-0 font-medium"
              style={{ color: 'var(--espresso)', opacity: 0.45 }}
            >
              {filtered.length} məhsul
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 md:py-14">
        {/* Search */}
        <div className="relative mb-6 max-w-sm">
          <MagnifyingGlass
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--stone)' }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Məhsul axtar..."
            className="w-full pl-9 pr-9 py-2.5 text-[0.82rem] border transition-colors"
            style={{
              background: 'var(--cream)',
              borderColor: 'var(--cream-dark)',
              color: 'var(--espresso)',
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--olive)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--cream-dark)')}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--stone)' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => {
            const isActive = activeCat === f.cat
            return (
              <button
                key={f.label}
                onClick={() => setActiveCat(f.cat)}
                className="text-[0.72rem] px-4 py-2 border transition-all font-medium tracking-wide"
                style={
                  isActive
                    ? { background: 'var(--olive)', color: 'var(--cream)', borderColor: 'var(--olive)' }
                    : { background: 'transparent', color: 'rgba(27,19,9,0.55)', borderColor: 'var(--cream-dark)' }
                }
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-[1.4rem] font-light mb-2" style={{ color: 'var(--espresso)' }}>
              Nəticə tapılmadı
            </p>
            <p className="text-[0.8rem]" style={{ color: 'var(--stone)' }}>
              &ldquo;{query}&rdquo; üzrə heç bir məhsul yoxdur
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { getProductsByCategory } from '@/lib/products'
import type { Product } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import ProductAddToCart from '@/components/ProductAddToCart'

interface Props {
  product: Product
}

export default function ProductDetail({ product }: Props) {
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://finecup.az${product.image}`,
    offers: product.variants.map((v) => ({
      '@type': 'Offer',
      price: v.price,
      priceCurrency: 'AZN',
      availability: v.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      name: v.size,
    })),
    brand: { '@type': 'Brand', name: 'Fine Cup Coffee Roasters' },
  }

  const flavorNotes = product.notes ? product.notes.split(', ') : []

  return (
    <main style={{ background: 'var(--cream)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-8">
        <nav className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase" style={{ color: 'var(--espresso)', opacity: 0.45 }}>
          <Link href="/" className="hover:opacity-100 transition-opacity">Ana Səhifə</Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:opacity-100 transition-opacity">{product.categoryLabel}</Link>
          <span>/</span>
          <span style={{ opacity: 0.7 }}>{product.name}</span>
        </nav>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden" style={{ background: 'var(--cream-mid)' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {product.type && (
              <span
                className="absolute top-4 left-4 text-[0.57rem] tracking-widest uppercase px-2.5 py-1.5 font-medium"
                style={{ background: 'var(--olive)', color: 'var(--cream)' }}
              >
                {product.type === 'single-origin'
                  ? 'Single Origin'
                  : product.type === 'blend'
                  ? 'Blend'
                  : product.type === 'decaf'
                  ? 'Decaf'
                  : product.type}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <div>
              <p className="section-label mb-3">{product.categoryLabel}</p>
              <h1
                className="font-serif font-light leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--espresso)' }}
              >
                {product.name}
              </h1>
            </div>

            {flavorNotes.length > 0 && (
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest mb-2.5 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>
                  Tat notları
                </p>
                <div className="flex flex-wrap gap-2">
                  {flavorNotes.map((note, i) => (
                    <span
                      key={i}
                      className="text-[0.68rem] px-3 py-1.5 border font-medium tracking-wide"
                      style={{ borderColor: 'var(--olive)', color: 'var(--olive)' }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="text-[0.88rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.65 }}>
              {product.description}
            </p>

            <div className="border-t pt-6" style={{ borderColor: 'var(--cream-dark)' }}>
              <ProductAddToCart product={product} />
            </div>

            <div className="border-t pt-6 space-y-3" style={{ borderColor: 'var(--cream-dark)' }}>
              {[
                { icon: '→', text: 'Bakı daxili 30 ₼ üzəri pulsuz çatdırılma' },
                { icon: '→', text: 'Qovrulan gündən 72 saat ərzində çatdırılır' },
                { icon: '→', text: 'B2B sifarişlər üçün: +994 55 229 55 22' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[0.75rem]" style={{ color: 'var(--espresso)', opacity: 0.55 }}>
                  <span style={{ color: 'var(--olive)', opacity: 1 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* ── PAYMENT ICONS ── */}
            <div className="border-t pt-6" style={{ borderColor: 'var(--cream-dark)' }}>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  { label: 'VISA',      bg: '#1a1f71', color: '#fff',    w: 52 },
                  { label: 'MC',        bg: '#fff',    color: '#eb001b', w: 40, ismc: true },
                  { label: 'AMEX',      bg: '#007bc1', color: '#fff',    w: 52 },
                  { label: 'JCB',       bg: '#003087', color: '#fff',    w: 40 },
                  { label: 'DISCOVER',  bg: '#f76f20', color: '#fff',    w: 60 },
                  { label: 'DINERS',    bg: '#fff',    color: '#004a97', w: 52, border: true },
                  { label: 'UnionPay',  bg: '#c0392b', color: '#fff',    w: 56 },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-center rounded-sm text-[0.5rem] font-bold tracking-wide"
                    style={{
                      width: p.w,
                      height: 28,
                      background: p.bg,
                      color: p.color,
                      border: p.border ? '1px solid #d0d0d0' : 'none',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {p.ismc ? (
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ display: 'block', width: 14, height: 14, borderRadius: '50%', background: '#eb001b', opacity: 0.9 }} />
                        <span style={{ display: 'block', width: 14, height: 14, borderRadius: '50%', background: '#f79e1b', marginLeft: -6 }} />
                      </span>
                    ) : (
                      p.label
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--olive)', flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <p className="text-[0.65rem] tracking-wide" style={{ color: 'var(--espresso)', opacity: 0.5 }}>
                  Etibarlı və təhlükəsiz ödəniş
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 border-t" style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream-mid)' }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-2">Kəşf et</p>
                <h2 className="font-serif text-[2rem] font-light" style={{ color: 'var(--espresso)' }}>
                  Digər {product.categoryLabel}
                </h2>
              </div>
              <Link
                href={`/${product.category}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-wider font-medium"
                style={{ color: 'var(--olive)' }}
              >
                Hamısına bax <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

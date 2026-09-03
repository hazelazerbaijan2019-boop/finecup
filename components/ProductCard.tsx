'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from '@phosphor-icons/react'
import { useCart } from '@/lib/cart'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [added, setAdded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const variant = product.variants[selectedVariant]

  const handleAdd = () => {
    if (!variant.inStock || added) return
    addItem({
      productId: product.id,
      productName: product.name,
      variantSize: variant.size,
      price: variant.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return
    const clientX = e.clientX
    const clientY = e.clientY
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const rotX = (((clientY - rect.top) / rect.height) - 0.5) * -6
      const rotY = (((clientX - rect.left) / rect.width) - 0.5) * 6
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
    })
  }

  const handleMouseLeave = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className="product-card group flex flex-col h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <Link href={`/${product.category}/${product.slug}`} className="block relative overflow-hidden aspect-[4/5]" style={{ background: 'var(--cream-dark)' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-img object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {!variant.inStock && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(243,237,216,0.8)' }}>
            <span
              className="text-[0.6rem] font-medium tracking-widest uppercase px-3 py-1.5 border"
              style={{ color: 'var(--stone)', borderColor: 'var(--cream-dark)', background: 'var(--cream)' }}
            >
              Stokda yox
            </span>
          </div>
        )}
        {product.type && (
          <span
            className="absolute top-3 left-3 text-[0.57rem] tracking-widest uppercase px-2 py-1 font-medium"
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
        {/* Hover: taste notes overlay */}
        {product.notes && (
          <div
            className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
            style={{ background: 'rgba(27,19,9,0.85)' }}
          >
            <p className="text-[0.6rem] tracking-[0.25em] uppercase mb-1" style={{ color: 'var(--olive-light)' }}>Tat notları</p>
            <p className="text-[0.7rem] leading-snug" style={{ color: 'var(--cream)' }}>{product.notes}</p>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-3.5 gap-2" style={{ background: 'var(--cream)' }}>
        <div>
          <p className="text-[0.58rem] uppercase tracking-wider mb-0.5" style={{ color: 'var(--olive)' }}>
            {product.categoryLabel}
          </p>
          <h3 className="text-[0.85rem] font-semibold leading-snug" style={{ color: 'var(--espresso)' }}>
            {product.name}
          </h3>
          {product.notes && (
            <p className="text-[0.7rem] mt-0.5 leading-snug" style={{ color: 'var(--stone)' }}>
              {product.notes}
            </p>
          )}
        </div>

        {/* Variants */}
        {product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {product.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                disabled={!v.inStock}
                className="text-[0.62rem] px-2 py-1 border transition-all font-medium"
                style={
                  i === selectedVariant
                    ? { background: 'var(--olive)', color: 'var(--cream)', borderColor: 'var(--olive)' }
                    : v.inStock
                    ? { background: 'transparent', color: 'var(--espresso)', borderColor: 'var(--cream-dark)', cursor: 'pointer' }
                    : { background: 'transparent', color: 'var(--cream-dark)', borderColor: 'var(--cream-mid)', cursor: 'not-allowed', textDecoration: 'line-through' }
                }
              >
                {v.size}
              </button>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: 'var(--cream-mid)' }}>
          <span className="text-[1rem] font-semibold tabular-nums" style={{ color: 'var(--espresso)' }}>
            {variant.price} ₼
          </span>
          <button
            onClick={handleAdd}
            disabled={!variant.inStock || added}
            className="text-[0.65rem] font-medium px-3.5 py-2 border transition-all duration-200 flex items-center gap-1.5 tracking-wide uppercase"
            style={
              added
                ? { background: 'var(--olive)', color: 'var(--cream)', borderColor: 'var(--olive)' }
                : variant.inStock
                ? { background: 'transparent', color: 'var(--espresso)', borderColor: 'var(--espresso)', cursor: 'pointer' }
                : { background: 'transparent', color: 'var(--cream-dark)', borderColor: 'var(--cream-mid)', cursor: 'not-allowed' }
            }
          >
            {added ? (
              <>
                <Check size={11} weight="bold" />
                Əlavə edildi
              </>
            ) : variant.inStock ? (
              'Səbətə at'
            ) : (
              'Stokda yox'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

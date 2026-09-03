'use client'

import { useState } from 'react'
import { Check } from '@phosphor-icons/react'
import { useCart } from '@/lib/cart'
import { useLang } from '@/lib/lang'
import type { Product } from '@/lib/products'

export default function ProductAddToCart({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { t } = useLang()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [added, setAdded] = useState(false)

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

  return (
    <div className="space-y-5">
      {product.variants.length > 1 && (
        <div>
          <p className="text-[0.65rem] uppercase tracking-widest mb-2.5 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>
            {t.sizeSelect}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                disabled={!v.inStock}
                className="text-[0.72rem] px-4 py-2 border transition-all font-medium"
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
        </div>
      )}

      <div className="flex items-center gap-4 pt-2">
        <span className="text-[2rem] font-semibold tabular-nums font-serif" style={{ color: 'var(--espresso)' }}>
          {variant.price} ₼
        </span>
        <button
          onClick={handleAdd}
          disabled={!variant.inStock || added}
          className="btn-olive flex-1"
          style={
            !variant.inStock
              ? { opacity: 0.45, cursor: 'not-allowed' }
              : undefined
          }
        >
          {added ? (
            <>
              <Check size={14} weight="bold" />
              {t.added}
            </>
          ) : variant.inStock ? (
            t.addToCart
          ) : (
            t.outOfStock
          )}
        </button>
      </div>
    </div>
  )
}

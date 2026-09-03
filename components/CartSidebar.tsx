'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '@/lib/cart'
import { X, Minus, Plus, ShoppingBag } from '@phosphor-icons/react'

export default function CartSidebar() {
  const { items, isOpen, total, closeCart, removeItem, updateQty } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} aria-hidden="true" />
      <aside
        className="fixed right-0 top-0 h-full w-full max-w-md z-[60] flex flex-col shadow-2xl"
        style={{ background: 'var(--cream)' }}
        aria-label="Səbət"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--cream-dark)' }}>
          <div className="flex items-center gap-2" style={{ color: 'var(--espresso)' }}>
            <ShoppingBag size={20} weight="regular" />
            <span className="text-[0.75rem] font-semibold tracking-[0.18em] uppercase">Səbət</span>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 transition-colors rounded-full"
            style={{ color: 'var(--espresso)' }}
            aria-label="Səbəti bağla"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} weight="thin" style={{ color: 'var(--cream-dark)' }} />
              <p className="text-sm" style={{ color: 'var(--stone)' }}>Səbətiniz boşdur</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.variantSize}`}
                  className="flex gap-4"
                >
                  <div className="relative w-16 h-20 overflow-hidden flex-shrink-0" style={{ background: 'var(--cream-mid)' }}>
                    <Image
                      src={item.image}
                      alt={item.productName}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: 'var(--espresso)' }}>{item.productName}</p>
                    <p className="text-[0.7rem] mt-0.5" style={{ color: 'var(--stone)' }}>{item.variantSize}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border" style={{ borderColor: 'var(--cream-dark)' }}>
                        <button
                          onClick={() => updateQty(item.productId, item.variantSize, item.quantity - 1)}
                          className="p-1.5 transition-colors"
                          style={{ color: 'var(--espresso)' }}
                          aria-label="Azalt"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs w-5 text-center" style={{ color: 'var(--espresso)' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.productId, item.variantSize, item.quantity + 1)}
                          className="p-1.5 transition-colors"
                          style={{ color: 'var(--espresso)' }}
                          aria-label="Artır"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--espresso)' }}>
                        {(item.price * item.quantity).toFixed(2)} ₼
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.variantSize)}
                    className="p-1 transition-colors flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--stone)' }}
                    aria-label="Sil"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t space-y-4" style={{ borderColor: 'var(--cream-dark)' }}>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: 'var(--stone)' }}>Cəmi</span>
              <span className="text-lg font-semibold" style={{ color: 'var(--espresso)' }}>{total.toFixed(2)} ₼</span>
            </div>
            <p className="text-[0.7rem]" style={{ color: 'var(--stone)' }}>
              30 ₼ və üzərindəki sifarişlərdə Bakı daxili pulsuz çatdırılma
            </p>
            <a
              href={`https://wa.me/994552295522?text=${encodeURIComponent(
                'Salam! Aşağıdakı məhsulları sifariş etmək istəyirəm:\n\n' +
                items.map(i => `• ${i.productName} — ${i.variantSize} × ${i.quantity} = ${(i.price * i.quantity).toFixed(2)} ₼`).join('\n') +
                `\n\nCəmi: ${total.toFixed(2)} ₼`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-medium tracking-wide transition-colors"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ilə sifariş
            </a>
            <button
              onClick={closeCart}
              className="w-full text-[0.75rem] py-1 transition-colors"
              style={{ color: 'var(--stone)' }}
            >
              Alış-verişə davam et
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

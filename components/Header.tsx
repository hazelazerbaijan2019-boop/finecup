'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCart } from '@/lib/cart'
import { useLang, type Lang } from '@/lib/lang'
import { ShoppingBag, List, X } from '@phosphor-icons/react'
import { categories } from '@/lib/products'

const navLinkDefs = [
  { key: 'about' as const, href: '/haqqimizda' },
  { key: 'b2b'   as const, href: '/b2b' },
  { key: 'blog'  as const, href: '/blog' },
  { key: 'contact' as const, href: '/elaqe' },
]

export default function Header() {
  const { itemCount, openCart } = useCart()
  const { lang, setLang, t } = useLang()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const catalogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > lastY.current && y > 140 && !mobileOpen)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setCatalogOpen(false)
  }, [pathname])

  const isHeroPage = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? 'bg-[var(--cream)]/96 backdrop-blur-md border-b border-[var(--cream-dark)]'
          : isHeroPage
          ? 'bg-black/50 backdrop-blur-md border-b border-white/10 hero-header'
          : 'bg-[var(--cream)] border-b border-[var(--cream-dark)]'
      } ${hidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* ── ANNOUNCEMENT BAR ── */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: scrolled ? 0 : 36,
          opacity: scrolled ? 0 : 1,
          background: 'var(--espresso)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-9 flex items-center justify-between gap-4">
          <div className="flex-1" />
          <p className="text-[0.58rem] tracking-[0.18em] text-center flex-shrink-0" style={{ color: 'rgba(243,237,216,0.75)' }}>
            {t.shipping}
          </p>
          <div className="flex-1 flex justify-end items-center">
            {(['az', 'en', 'ru'] as Lang[]).map((l, i) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="text-[0.55rem] tracking-widest uppercase px-2 py-0.5 transition-all"
                style={{
                  color: lang === l ? 'var(--cream)' : 'rgba(243,237,216,0.35)',
                  fontWeight: lang === l ? 700 : 400,
                  borderLeft: i > 0 ? '1px solid rgba(243,237,216,0.15)' : 'none',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px] lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div
              className={`w-9 h-9 transition-colors duration-300 ${
                scrolled || !isHeroPage
                  ? 'text-[var(--espresso)]'
                  : 'text-white'
              }`}
            >
              <Image
                src="/images/logo-circle.png"
                alt="Fine Cup"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                style={{ filter: scrolled || !isHeroPage ? 'none' : 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-[0.85rem] font-semibold tracking-[0.12em] uppercase leading-none transition-colors duration-300 ${
                  scrolled || !isHeroPage ? 'text-[var(--espresso)]' : 'text-white'
                }`}
              >
                Fine Cup
              </span>
              <span
                className={`text-[0.52rem] tracking-[0.28em] uppercase leading-none mt-0.5 transition-colors duration-300 ${
                  scrolled || !isHeroPage ? 'text-[var(--olive)]' : 'text-white/55'
                }`}
              >
                Coffee Roasters
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Catalog dropdown */}
            <div
              ref={catalogRef}
              className="relative"
              onMouseEnter={() => setCatalogOpen(true)}
              onMouseLeave={() => setCatalogOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[0.78rem] tracking-wide transition-colors ${
                  scrolled || !isHeroPage
                    ? 'text-[var(--espresso)]/60 hover:text-[var(--espresso)]'
                    : 'text-white hover:text-white'
                }`}
              >
                {t.catalog}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 pt-3 w-60 transition-all duration-200 ${
                  catalogOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-[var(--cream)] border border-[var(--cream-dark)] shadow-xl shadow-[var(--espresso)]/10 py-2">
                  <Link
                    href="/katalog"
                    className="flex items-center justify-between px-5 py-3 text-[0.78rem] text-[var(--espresso)] hover:bg-[var(--cream-mid)] font-medium transition-colors"
                  >
                    Bütün məhsullar
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="h-px bg-[var(--cream-dark)] my-1.5 mx-5" />
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      className="flex items-center justify-between px-5 py-2.5 text-[0.76rem] text-[var(--espresso)]/65 hover:text-[var(--espresso)] hover:bg-[var(--cream-mid)] transition-colors"
                    >
                      {cat.label}
                      <span className="text-[0.6rem] text-[var(--olive)] opacity-0 group-hover:opacity-100">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinkDefs.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[0.78rem] tracking-wide transition-colors ${
                  pathname === link.href
                    ? scrolled || !isHeroPage
                      ? 'text-[var(--espresso)] font-medium'
                      : 'text-white font-medium'
                    : scrolled || !isHeroPage
                    ? 'text-[var(--espresso)]/60 hover:text-[var(--espresso)]'
                    : 'text-white hover:text-white'
                }`}
              >
                {t[link.key]}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <button
              onClick={openCart}
              className={`relative p-2.5 transition-colors ${
                scrolled || !isHeroPage
                  ? 'text-[var(--espresso)]/70 hover:text-[var(--espresso)]'
                  : 'text-white hover:text-white/80'
              }`}
              aria-label="Səbət"
            >
              <ShoppingBag size={20} weight="regular" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] flex items-center justify-center bg-[var(--olive)] text-[var(--cream)] text-[9px] font-semibold rounded-full px-0.5">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className={`lg:hidden p-2.5 transition-colors ${
                scrolled || !isHeroPage
                  ? 'text-[var(--espresso)]/70 hover:text-[var(--espresso)]'
                  : 'text-white hover:text-white/80'
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menyu"
            >
              {mobileOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-350 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[var(--cream)] border-t border-[var(--cream-dark)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 space-y-1">
            {/* Catalog links */}
            <div className="pb-3">
              <p className="text-[0.55rem] text-[var(--olive)] uppercase tracking-[0.3em] px-3 pb-2.5 font-medium">
                {t.catalog}
              </p>
              <Link
                href="/katalog"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-[0.82rem] font-medium text-[var(--espresso)] hover:bg-[var(--cream-mid)] transition-colors"
              >
                Bütün məhsullar
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-[0.8rem] text-[var(--espresso)]/65 hover:text-[var(--espresso)] hover:bg-[var(--cream-mid)] transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-[var(--cream-dark)] pt-3 space-y-0.5">
              {navLinkDefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-[0.8rem] text-[var(--espresso)]/65 hover:text-[var(--espresso)] hover:bg-[var(--cream-mid)] transition-colors"
                >
                  {t[link.key]}
                </Link>
              ))}
            </div>
            <div className="border-t border-[var(--cream-dark)] pt-3 pb-1">
              <a
                href="tel:+994552295522"
                className="block px-3 py-2 text-[0.75rem] text-[var(--olive)] font-medium"
              >
                +994 55 229 55 22
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  catalog: [
    { label: 'Qəhvə', href: '/qehve' },
    { label: 'Sirop', href: '/sirop' },
    { label: 'Çay', href: '/cay' },
    { label: 'Avadanlıq', href: '/avadanliq' },
    { label: 'Kimyəvi maddələr', href: '/kimyevi' },
  ],
  company: [
    { label: 'Haqqımızda', href: '/haqqimizda' },
    { label: 'B2B / HoReCa', href: '/b2b' },
    { label: 'Bloq', href: '/blog' },
    { label: 'Əlaqə', href: '/elaqe' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--espresso)', color: 'var(--cream)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-9 h-9">
                <Image
                  src="/images/logo-circle.png"
                  alt="Fine Cup"
                  width={36}
                  height={36}
                  className="w-full h-full"
                  style={{ filter: 'brightness(0) saturate(100%) invert(90%) sepia(10%) saturate(500%) hue-rotate(15deg)' }}
                />
              </div>
              <div>
                <p className="text-[0.82rem] font-semibold tracking-[0.12em] uppercase leading-none" style={{ color: 'var(--cream)' }}>
                  Fine Cup
                </p>
                <p className="text-[0.5rem] tracking-[0.28em] uppercase mt-0.5" style={{ color: 'var(--olive-light)' }}>
                  Coffee Roasters
                </p>
              </div>
            </Link>

            <p className="text-[0.78rem] leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(243,237,216,0.5)' }}>
              2020-ci ildən etibarən Bakıda fəaliyyət göstərən specialty qəhvə qovurucuları.
              Drink Only The Fresh Roasted Coffee.
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+994552295522"
                className="flex items-center gap-2.5 text-[0.78rem] transition-colors hover:opacity-100"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 10c0 .35-.07.7-.2 1.05-.22.5-.63.9-1.12 1.12-.42.2-.84.28-1.26.28-.7 0-1.4-.21-2.03-.63-.7-.42-1.4-1.05-2.03-1.82A12.4 12.4 0 014.1 7.96c-.28-.7-.42-1.33-.42-1.96 0-.49.07-.91.28-1.26.14-.42.49-.84.9-1.12.49-.35 1.05-.49 1.54-.49.21 0 .42.07.56.14.21.07.35.28.49.49l1.61 2.24c.14.21.21.35.28.56.07.14.07.28.07.42 0 .21-.07.35-.14.56-.07.14-.21.35-.35.49l-.49.56c.42.63.84 1.05 1.26 1.4.42.28.84.56 1.33.77l.49-.49c.14-.14.35-.28.56-.35.14-.07.28-.14.49-.14.14 0 .35.07.49.14l2.24 1.61c.28.14.42.35.49.56z" stroke="currentColor" strokeWidth="1"/>
                </svg>
                +994 55 229 55 22
              </a>
              <a
                href="mailto:info@finecup.az"
                className="flex items-center gap-2.5 text-[0.78rem] transition-colors hover:opacity-100"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                  <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
                info@finecup.az
              </a>
              <div
                className="flex items-start gap-2.5 text-[0.78rem]"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="text-[0.58rem] font-medium uppercase tracking-[0.28em] mb-5" style={{ color: 'var(--olive-light)' }}>
              Kataloq
            </h3>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.78rem] transition-colors hover:opacity-100"
                    style={{ color: 'rgba(243,237,216,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.58rem] font-medium uppercase tracking-[0.28em] mb-5" style={{ color: 'var(--olive-light)' }}>
              Şirkət
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.78rem] transition-colors hover:opacity-100"
                    style={{ color: 'rgba(243,237,216,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & hours */}
          <div>
            <h3 className="text-[0.58rem] font-medium uppercase tracking-[0.28em] mb-5" style={{ color: 'var(--olive-light)' }}>
              Sosial Media
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/finecup.coffee.roasters/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[0.78rem] transition-colors hover:opacity-100"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="7" cy="7" r="2.8" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="10.5" cy="3.5" r="0.7" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://facebook.com/finecup.az"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[0.78rem] transition-colors hover:opacity-100"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1"/>
                  <path d="M7.8 5H9V3H7.5C6.4 3 6 3.9 6 4.5V5H5v2h1v4h2V7h1.4L9.8 5H8" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://wa.me/994552295522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[0.78rem] transition-colors hover:opacity-100"
                style={{ color: 'rgba(243,237,216,0.5)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5C3.96 1.5 1.5 3.96 1.5 7c0 .98.26 1.9.7 2.7L1.5 12.5l2.88-.69A5.49 5.49 0 007 12.5c3.04 0 5.5-2.46 5.5-5.5S10.04 1.5 7 1.5z" stroke="currentColor" strokeWidth="1"/>
                  <path d="M5.5 5.5s.5-.5 1 .5l.5 1-1.5 1.5s.5 1 1.5 1.5 1.5-.5 1.5-.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t"
        style={{ borderColor: 'rgba(243,237,216,0.08)' }}
      >
        <p className="text-[0.68rem]" style={{ color: 'rgba(243,237,216,0.3)' }}>
          &copy; {new Date().getFullYear()} Fine Cup Coffee Roasters. Bütün hüquqlar qorunur.
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: 'Məxfilik', href: '/privacy' },
            { label: 'Çatdırılma', href: '/delivery' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.68rem] transition-colors hover:opacity-75"
              style={{ color: 'rgba(243,237,216,0.3)' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

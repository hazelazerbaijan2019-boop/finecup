import type { Metadata } from 'next'
import { Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Əlaqə',
  description: 'Fine Cup Coffee Roasters ilə əlaqə. +994 55 229 55 22 · info@finecup.az · Bakı.',
}

export default function ElaqePage() {
  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* ── HEADER ── */}
      <div className="border-b" style={{ borderColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-16">
          <p className="section-label mb-3">Əlaqə</p>
          <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
            Bizimlə əlaqə saxlayın
          </h1>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--espresso)', opacity: 0.55 }}>
            Suallarınız, B2B sorğular, texniki yardım — cavabı 24 saat ərzindədir.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-20">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">

          {/* ── CONTACT INFO ── */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-6">
                {[
                  { Icon: Phone,          label: 'Telefon',     value: '+994 55 229 55 22',  href: 'tel:+994552295522' },
                  { Icon: EnvelopeSimple, label: 'E-poçt',      value: 'info@finecup.az',    href: 'mailto:info@finecup.az' },
                  { Icon: MapPin,         label: 'Ünvan',       value: 'Bakı, Azərbaycan',   href: 'https://maps.google.com/?q=Baku+Azerbaijan' },
                  { Icon: Clock,          label: 'İş saatları', value: 'B.e–Cümə 09:00–18:00\nŞənbə 10:00–16:00', href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 border"
                      style={{ borderColor: 'var(--cream-dark)', color: 'var(--olive)' }}
                    >
                      <Icon size={17} weight="regular" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest mb-1 font-medium" style={{ color: 'var(--olive)' }}>{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[0.88rem] font-medium transition-opacity hover:opacity-70"
                          style={{ color: 'var(--espresso)' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[0.88rem] font-medium whitespace-pre-line" style={{ color: 'var(--espresso)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Social */}
            <Reveal delay={120}>
              <div className="border-t pt-8" style={{ borderColor: 'var(--cream-dark)' }}>
                <p className="text-[0.6rem] uppercase tracking-widest mb-5 font-medium" style={{ color: 'var(--olive)' }}>Sosial media</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/finecup.coffee.roasters' },
                    { label: 'Facebook',  href: 'https://facebook.com/finecup.az' },
                    { label: 'WhatsApp',  href: 'https://wa.me/994552295522' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.72rem] font-medium px-4 py-2.5 border transition-all tracking-wide hover:bg-[var(--olive)] hover:text-[var(--cream)] hover:border-[var(--olive)]"
                      style={{ borderColor: 'var(--cream-dark)', color: 'var(--espresso)' }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* WhatsApp CTA */}
            <Reveal delay={200}>
              <a
                href="https://wa.me/994552295522?text=Salam,%20məlumat%20almaq%20istəyirəm."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 border transition-colors hover:border-[var(--olive)]"
                style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream-mid)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-[0.78rem] font-semibold" style={{ color: 'var(--espresso)' }}>WhatsApp ilə yazın</p>
                  <p className="text-[0.68rem]" style={{ color: 'var(--stone)' }}>Operativ cavab</p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* ── CONTACT FORM ── */}
          <Reveal delay={100}>
            <div>
              <p className="section-label mb-3">Mesaj</p>
              <h2 className="font-serif text-[1.8rem] font-light mb-8" style={{ color: 'var(--espresso)' }}>Mesaj göndər</h2>
              <form className="space-y-4" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[0.65rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>Adınız</label>
                    <input type="text" id="name" name="name" required placeholder="Ad Soyad" className="fc-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[0.65rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>E-poçt</label>
                    <input type="email" id="email" name="email" required placeholder="email@example.com" className="fc-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[0.65rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>Mövzu</label>
                  <input type="text" id="subject" name="subject" placeholder="Sualınızın mövzusu" className="fc-input" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.5 }}>Mesajınız</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Mesajınızı yazın..." className="fc-input resize-none" />
                </div>
                <button type="submit" className="w-full btn-olive justify-center py-4">
                  GÖNDƏR
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}

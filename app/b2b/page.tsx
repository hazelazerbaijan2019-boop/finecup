import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'B2B / HoReCa',
  description: 'Fine Cup Coffee Roasters — kafe, restoran, otel üçün professional qəhvə həlləri. Barista təlimi, sabit çatdırılma.',
  openGraph: {
    title: 'B2B / HoReCa | Fine Cup Coffee Roasters',
    images: ['/images/fc-cups-branded.jpg'],
  },
}

const services = [
  { num: '01', title: 'Qəhvə Təchizatı', desc: 'Single origin və blend qəhvə, sirop, çay — fərdi həftəlik/aylıq çatdırılma cədvəli.' },
  { num: '02', title: 'Pulsuz Barista Təlimi', desc: 'Espresso, latte art, filter metodlar — komandanız üçün professional kurslar.' },
  { num: '03', title: 'Texniki Dəstək', desc: 'Avadanlıq quraşdırılması, baxımı, arızaların həlli — operativ cavab.' },
  { num: '04', title: 'Avadanlıq Satışı', desc: 'Espresso maşınları, dəyirmanlar, aksessuarlar — B2B qiymətləri ilə.' },
  { num: '05', title: 'Fərdi HoReCa Şərtləri', desc: 'Həcmə görə xüsusi qiymətlər, ödəniş şərtləri, uzunmüddətli müqavilə.' },
  { num: '06', title: 'Sabit Çatdırılma', desc: 'Bakı daxilindəki bütün nöqtələrə planlaşdırılmış çatdırılma.' },
]

const partners = ['Kafeler', 'Restoranlar', 'Otellər', 'Ofislər', 'Çörəkxanalar', 'Otel zəncirləri']

export default function B2BPage() {
  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden" style={{ background: 'var(--espresso)' }}>
        <Image src="/images/fc-cups-branded.jpg" alt="Fine Cup B2B" fill priority className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 lg:pb-24 w-full">
          <p className="text-[0.58rem] tracking-[0.38em] uppercase mb-5" style={{ color: 'var(--olive-light)' }}>B2B / HoReCa</p>
          <h1 className="font-serif font-light leading-[1.04] max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', color: 'var(--cream)' }}>
            Biznesiniz üçün<br />
            <em className="italic" style={{ color: 'var(--olive-light)' }}>professional</em> həll
          </h1>
          <p className="mt-5 text-sm leading-relaxed max-w-md" style={{ color: 'rgba(243,237,216,0.55)' }}>
            Kafe, restoran, otel və ofislər üçün sabit qəhvə təchizatı, barista təlimi, avadanlıq — hamısı bir yerdə.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#form" className="btn-olive">Müraciət et <ArrowRight size={14} weight="bold" /></a>
            <a href="tel:+994552295522" className="btn-outline">+994 55 229 55 22</a>
          </div>
        </div>
      </section>

      {/* ── PARTNER TYPES ── */}
      <section className="py-10 border-b" style={{ borderColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <span key={p} className="text-[0.68rem] px-4 py-2 border tracking-wide font-medium" style={{ borderColor: 'var(--cream-dark)', color: 'var(--espresso)', opacity: 0.6 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-14">
            <p className="section-label mb-3">Xidmətlər</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
              Nə təklif edirik?
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--cream-dark)' }}>
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 60}>
                <div className="p-8 md:p-10 h-full" style={{ background: 'var(--cream)' }}>
                  <span className="text-[0.58rem] font-semibold" style={{ color: 'var(--olive)' }}>{s.num}</span>
                  <h3 className="font-serif text-[1.3rem] font-light mt-4 mb-3" style={{ color: 'var(--espresso)' }}>{s.title}</h3>
                  <p className="text-[0.82rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.58 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-24" style={{ background: 'var(--espresso)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-4" style={{ color: 'var(--olive-light)' }}>Niyə Fine Cup?</p>
              <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--cream)' }}>
                Tez-tez verilən suallar
              </h2>
            </Reveal>
            <div className="space-y-8">
              {[
                { q: 'Minimum sifariş tələbi varmı?', a: 'Minimum sifariş tələbi yoxdur. Kiçik kafedən böyük otel zəncirinə qədər hamı üçün şərtlər var.' },
                { q: 'Çatdırılma nə qədər tez?', a: 'Qovrulan gündən 72 saat ərzində Bakı daxili bütün nöqtələrə çatdırılır.' },
                { q: 'Barista təlimi pulludurmu?', a: 'B2B tərəfdaşlarımız üçün barista təlimi tamamilə pulsuzdur. Həm əsas, həm irəliləmiş səviyyə.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-t pt-6" style={{ borderColor: 'rgba(243,237,216,0.1)' }}>
                    <p className="text-[0.85rem] font-semibold mb-2" style={{ color: 'var(--cream)' }}>{item.q}</p>
                    <p className="text-[0.82rem] leading-relaxed" style={{ color: 'rgba(243,237,216,0.55)' }}>{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="form" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
            <div>
              <Reveal>
                <p className="section-label mb-3">Müraciət</p>
                <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
                  B2B müraciət formu
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.6 }}>
                  Formu doldurun, 24 saat ərzində sizinlə əlaqə saxlayacağıq.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8 space-y-3">
                  {[
                    'Minimum sifariş tələbi yoxdur',
                    'Həftəlik/aylıq çatdırılma',
                    'Pulsuz barista təlimi',
                    'Avadanlıq servisi dəstəyi',
                    'Fərdi qiymət siyasəti',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[0.82rem]" style={{ color: 'var(--espresso)', opacity: 0.65 }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--olive)' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <form className="space-y-4" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[0.68rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.55 }}>Adınız</label>
                    <input type="text" id="name" name="name" required placeholder="Ad Soyad" className="fc-input" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[0.68rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.55 }}>Şirkət / Müəssisə</label>
                    <input type="text" id="company" name="company" placeholder="Kafe, restoran..." className="fc-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.68rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.55 }}>E-poçt</label>
                  <input type="email" id="email" name="email" required placeholder="email@example.com" className="fc-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[0.68rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.55 }}>Telefon</label>
                  <input type="tel" id="phone" name="phone" placeholder="+994 XX XXX XX XX" className="fc-input" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[0.68rem] uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--espresso)', opacity: 0.55 }}>Sorğunuz</label>
                  <textarea id="message" name="message" rows={4} placeholder="Ətraflı məlumat yazın..." className="fc-input resize-none" />
                </div>
                <button type="submit" className="w-full btn-olive justify-center py-4">GÖNDƏR</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  )
}

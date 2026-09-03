import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import CategoriesClient from '@/components/CategoriesClient'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Fine Cup Coffee Roasters — Bakı',
  description: '2020-ci ildən Bakıda specialty qəhvə qovurucuları. Drink Only The Fresh Roasted Coffee.',
}

const photoStripImages = [
  { src: '/images/fc-latte-dark.jpg',      w: 320, label: 'Latte Art' },
  { src: '/images/fc-bags-green.jpg',      w: 260, label: 'Ethiopia Bags' },
  { src: '/images/fc-roaster-machine.jpg', w: 300, label: 'Roastery' },
  { src: '/images/fc-cups-branded.jpg',    w: 280, label: 'Fine Cup' },
  { src: '/images/fc-beans-tray.jpg',      w: 310, label: 'Beans' },
  { src: '/images/fc-sacks.jpg',           w: 280, label: 'Origin' },
  { src: '/images/fc-pour.jpg',            w: 260, label: 'Pour' },
  { src: '/images/fc-bag-white.jpg',       w: 290, label: 'Product' },
]

const marqueeItems = [
  'Specialty Coffee', 'Roasted in Baku', 'Ethiopia Yergacheffe', 'Colombia Supremo',
  'B2B & HoReCa', 'Brazil Santos', 'Fine Cup Syrups', 'Costa Rica', 'Q-Grader Approved',
  'Kenya AB', '100% Arabika', 'Since 2020',
]

const marqueeItems2 = [
  'Single Origin', 'Fresh Roasted', 'Barista Training', 'Peru MCM G1',
  'Guatemala El Jaguar', 'Specialty Syrups', 'Premium Teas', 'Italian Blend',
  'Direct Trade', 'Drink Only The Fresh', 'Azerbaijani Roasters', 'Golden Roaster',
]

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* ════════════════════════════════════════
          HERO — full-screen cinematic
      ════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] -mt-[108px] lg:-mt-[116px] flex flex-col items-center justify-end overflow-hidden text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* base overlay */}
        <div className="absolute inset-0" style={{ zIndex: 1, background: 'rgba(0,0,0,0.38)' }} />
        {/* top gradient — header yazıları görünsün */}
        <div className="absolute inset-x-0 top-0" style={{ zIndex: 1, height: 160, background: 'linear-gradient(to bottom, rgba(0,0,0,0.68) 0%, transparent 100%)' }} />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }} />

        <div className="relative w-full flex flex-col items-center pb-16 lg:pb-24" style={{ zIndex: 2 }}>
          {/* FINE */}
          <div
            className="hero-animate-2 font-serif font-light leading-none tracking-tight select-none w-full text-center"
            style={{ fontSize: 'clamp(4.5rem, 17vw, 18rem)', color: '#fff', letterSpacing: '-0.02em' }}
          >
            FINE
          </div>

          {/* mid divider with subtitle */}
          <div className="hero-animate-3 w-full flex items-center gap-0" style={{ padding: '10px 5vw' }}>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.18)' }} />
            <p
              className="flex-shrink-0 text-center"
              style={{ fontSize: '0.52rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', padding: '0 20px' }}
            >
              Specialty Coffee · Bakı · Est. 2020
            </p>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.18)' }} />
          </div>

          {/* CUP */}
          <div
            className="hero-animate-2 font-serif font-light leading-none tracking-tight select-none w-full text-center"
            style={{ fontSize: 'clamp(4.5rem, 17vw, 18rem)', color: 'var(--olive-light)', letterSpacing: '-0.02em' }}
          >
            CUP
          </div>

          {/* CTAs */}
          <div className="hero-animate-4 mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/katalog" className="btn-olive">
              Kataloqa bax
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link href="/b2b" className="btn-outline">
              B2B / HoReCa
            </Link>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="hero-animate-5 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
          <div className="w-px bg-white/20 overflow-hidden" style={{ height: 52 }}>
            <div className="scroll-indicator w-full" style={{ height: '40%', background: 'var(--olive-light)' }} />
          </div>
          <p className="text-[0.5rem] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Scroll
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DUAL MARQUEE STRIP
      ════════════════════════════════════════ */}
      <div style={{ background: 'var(--olive)', color: 'var(--cream)' }} className="overflow-hidden">
        {/* Row 1 → left */}
        <div className="py-2.5 overflow-hidden border-b border-white/10">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-5 text-[0.6rem] tracking-[0.28em] uppercase font-medium">
                {item}
                <span className="w-1 h-1 rounded-full bg-[var(--cream)]/40 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
        {/* Row 2 → right */}
        <div className="py-2.5 overflow-hidden">
          <div className="marquee-track-rev">
            {[...marqueeItems2, ...marqueeItems2].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-5 text-[0.6rem] tracking-[0.28em] uppercase font-medium opacity-60">
                {item}
                <span className="w-1 h-1 rounded-full bg-[var(--cream)]/30 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          PHOTO STRIP
      ════════════════════════════════════════ */}
      <section className="py-16 overflow-hidden" style={{ background: 'var(--cream)' }}>
        <div className="overflow-hidden">
          <div className="strip-track h-[340px] sm:h-[420px]">
            {[...photoStripImages, ...photoStripImages].map((img, i) => (
              <div key={i} className="strip-item flex-shrink-0" style={{ width: img.w, height: '100%' }}>
                <Image src={img.src} alt={img.label} width={img.w} height={420} className="object-cover" style={{ width: img.w, height: '100%' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURED PRODUCTS
      ════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream-mid)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Kolleksiya</p>
              <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] font-light leading-tight tracking-tight" style={{ color: 'var(--espresso)' }}>
                Seçilmiş<br />məhsullar
              </h2>
            </div>
            <Link href="/katalog" className="hidden sm:inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-wider font-medium" style={{ color: 'var(--olive)' }}>
              Hamısına bax <ArrowUpRight size={14} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link href="/katalog" className="btn-outline-dark text-[0.72rem]">
              Hamısına bax <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS — CountUp animasiyası
      ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 border-y" style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 2020, label: 'İldən bəri', suffix: '' },
              { end: 35,   label: 'Məhsul', suffix: '+' },
              { end: 11,   label: 'Mənşə ölkə', suffix: '+' },
              { end: 100,  label: 'Arabika', suffix: '%' },
            ].map((s) => (
              <Reveal key={s.label}>
                <div>
                  <p className="font-serif font-light leading-none tabular-nums" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', color: 'var(--espresso)' }}>
                    <CountUp end={s.end} suffix={s.suffix} duration={1400} />
                  </p>
                  <p className="text-[0.6rem] mt-2.5 uppercase tracking-widest" style={{ color: 'var(--espresso)', opacity: 0.4 }}>
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BRAND STORY — split layout
      ════════════════════════════════════════ */}
      <section className="py-20 md:py-32 overflow-hidden" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden" style={{ background: 'var(--cream-dark)' }}>
                  <Image
                    src="/images/fc-roaster-machine.jpg"
                    alt="Fine Cup qəhvə qovurucusu"
                    fill
                    className="object-cover product-img"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 sm:right-0 p-5 shadow-lg" style={{ background: 'var(--olive)', color: 'var(--cream)' }}>
                  <p className="text-[0.55rem] tracking-[0.3em] uppercase opacity-70 mb-1">Est.</p>
                  <p className="text-2xl font-serif font-light leading-none">2020</p>
                  <p className="text-[0.55rem] tracking-[0.2em] uppercase opacity-70 mt-1">Bakı</p>
                </div>
                <div className="absolute -top-6 -right-6 w-[38%] aspect-square overflow-hidden hidden sm:block" style={{ background: 'var(--cream-dark)', border: '4px solid var(--cream)' }}>
                  <Image src="/images/fc-beans-tray.jpg" alt="Qəhvə dənələri" fill className="object-cover" sizes="200px" />
                </div>
              </div>
            </Reveal>

            <div className="space-y-7">
              <Reveal><p className="section-label">Haqqımızda</p></Reveal>
              <Reveal delay={80}>
                <h2 className="font-serif text-[2.6rem] md:text-[3.4rem] font-light leading-[1.08] tracking-tight" style={{ color: 'var(--espresso)' }}>
                  Hər dənəni<br />
                  <em className="italic" style={{ color: 'var(--olive)' }}>özümüz</em> qovururuq
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.6 }}>
                  FINE CUP Coffee Roasters olaraq yalnız ən yaxşı arabika növlərini birbaşa mənşə ölkəsindən gətiririk.
                  Efiopiya, Braziliya, Kosta-Rika, Kolumbiya... Hər dənə, hər qovurma — dəqiq nəzarət altında.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.6 }}>
                  Kafe, restoran və otel sahibləri ilə birlikdə Azərbaycanda qəhvə mədəniyyətini inkişaf etdiririk.
                  Pulsuz barista təlimi, texniki dəstək, sabit çatdırılma.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="grid grid-cols-3 gap-5 pt-6 border-t" style={{ borderColor: 'var(--cream-dark)' }}>
                  {[
                    { end: 5, suffix: '+', label: 'İl təcrübə' },
                    { end: 100, suffix: '%', label: 'Arabika' },
                    { end: 11, suffix: '+', label: 'Mənşə ölkə' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-[2rem] font-light tabular-nums leading-none" style={{ color: 'var(--espresso)' }}>
                        <CountUp end={s.end} suffix={s.suffix} />
                      </p>
                      <p className="text-[0.62rem] mt-1.5 uppercase tracking-wider" style={{ color: 'var(--espresso)', opacity: 0.45 }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={300}>
                <Link href="/haqqimizda" className="btn-outline-dark inline-flex">
                  Ətraflı oxu <ArrowRight size={13} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CATEGORIES — full-screen hover
      ════════════════════════════════════════ */}
      <CategoriesClient />

      {/* ════════════════════════════════════════
          B2B SECTION
      ════════════════════════════════════════ */}
      <section className="overflow-hidden" style={{ background: 'var(--cream)' }}>
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[50vw] lg:min-h-[680px]" style={{ background: 'var(--espresso-mid)' }}>
            <Image src="/images/fc-cups-branded.jpg" alt="B2B Fine Cup" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
          </div>
          <div className="flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-0" style={{ background: 'var(--espresso)' }}>
            <div className="max-w-lg">
              <Reveal>
                <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-4" style={{ color: 'var(--olive-light)' }}>
                  B2B / HoReCa
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-serif text-[2.6rem] md:text-[3.4rem] font-light leading-[1.08]" style={{ color: 'var(--cream)' }}>
                  Biznesiniz üçün<br />
                  <em className="italic" style={{ color: 'var(--olive-light)' }}>professional</em> həll
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: 'rgba(243,237,216,0.55)' }}>
                  Kafe, restoran, otel və ofislər üçün sabit qəhvə təchizatı. Barista təlimi, avadanlıq quraşdırılması, texniki dəstək — hamısı daxildir.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 space-y-5">
                  {[
                    { num: '01', label: 'Sabit Çatdırılma', desc: 'Bakı daxili həftəlik cədvəl, soyuq zəncir qorunur' },
                    { num: '02', label: 'Pulsuz Barista Təlimi', desc: 'Komandanız üçün professional kurslar' },
                    { num: '03', label: 'Fərdi HoReCa Şərtləri', desc: 'Həcmə görə xüsusi qiymətlər' },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span className="text-[0.6rem] font-medium pt-0.5 flex-shrink-0" style={{ color: 'var(--olive-light)' }}>{item.num}</span>
                      <div>
                        <p className="text-[0.82rem] font-medium" style={{ color: 'var(--cream)' }}>{item.label}</p>
                        <p className="text-[0.72rem] mt-0.5 leading-relaxed" style={{ color: 'rgba(243,237,216,0.45)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10">
                  <Link href="/b2b" className="btn-olive">
                    Ətraflı məlumat <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS SECTION
      ════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream-mid)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="text-center mb-16">
            <p className="section-label mb-3">Prosesimiz</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light" style={{ color: 'var(--espresso)' }}>
              Mənşədən fincana
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { img: '/images/fc-sacks.jpg',           num: '01', title: 'Mənşə Ölkəsi',  desc: 'Efiopiya, Braziliya, Kolumbiya, Kosta-Rika — ən yaxşı ferma partnyorluqları.' },
              { img: '/images/fc-roaster-machine.jpg', num: '02', title: 'Bakıda Qovurma', desc: 'Golden Roaster GR2422 ilə hər lot ayrıca profilinə görə qovrulur.' },
              { img: '/images/fc-pour.jpg',             num: '03', title: 'Sizə Çatdırma',  desc: 'Qovrulan gündən 72 saat ərzində B2C və B2B sifarişlər çatdırılır.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6" style={{ background: 'var(--cream-dark)' }}>
                    <Image src={step.img} alt={step.title} fill className="object-cover product-img group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[0.6rem] font-medium pt-0.5 flex-shrink-0" style={{ color: 'var(--olive)' }}>{step.num}</span>
                    <div>
                      <h3 className="font-serif text-[1.4rem] font-light mb-2" style={{ color: 'var(--espresso)' }}>{step.title}</h3>
                      <p className="text-[0.78rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.55 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GALLERY GRID
      ════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            '/images/fc-cup-hand.jpg',
            '/images/fc-latte-cookie.jpg',
            '/images/fc-open-bag.jpg',
            '/images/fc-cups-blue.jpg',
            '/images/fc-bags-green.jpg',
            '/images/fc-warehouse.jpg',
          ].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group" style={{ background: 'var(--cream-dark)' }}>
              <Image src={src} alt="Fine Cup" fill className="object-cover product-img group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-6" style={{ background: 'var(--cream)' }}>
          <a href="https://instagram.com/finecup.coffee.roasters" target="_blank" rel="noopener noreferrer" className="text-[0.68rem] tracking-[0.25em] uppercase font-medium transition-colors" style={{ color: 'var(--olive)' }}>
            @finecup.coffee.roasters
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRUST STRIP
      ════════════════════════════════════════ */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'var(--cream-dark)' }}>
            {[
              { title: 'Pulsuz çatdırılma', desc: '30 ₼ və üzərindəki sifarişlərə Bakı daxili', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--olive)' }}><path d="M1 13h12V4H1v9zM13 7h4l2 3v3h-6V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.4"/></svg> },
              { title: 'Specialty keyfiyyət', desc: 'Birbaşa mənşə, teze qovrulmuş arabika', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--olive)' }}><path d="M10 2l2.4 5.6 6 .5-4.5 3.8 1.4 5.9L10 14.8 4.7 17.8l1.4-5.9L1.6 8.1l6-.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
              { title: 'Peşəkar dəstək', desc: '+994 55 229 55 22 · info@finecup.az', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--olive)' }}><path d="M18 13.6c0 .5-.1 1-.3 1.5-.3.7-.9 1.3-1.6 1.6-.6.3-1.2.4-1.8.4-1 0-2-.3-2.9-.9-1-.6-2-1.5-2.9-2.6-.9-1-1.6-2-2.1-2.9-.4-1-.6-1.9-.6-2.8 0-.7.1-1.3.4-1.8.2-.6.7-1.2 1.3-1.6.7-.5 1.5-.7 2.2-.7.3 0 .6.1.8.2.3.1.5.4.7.7l2.3 3.2c.2.3.3.5.4.8.1.2.1.4.1.6 0 .3-.1.5-.2.8-.1.2-.3.5-.5.7l-.7.8c.6.9 1.2 1.5 1.8 2 .6.4 1.2.8 1.9 1.1l.7-.7c.2-.2.5-.4.8-.5.2-.1.4-.2.7-.2.2 0 .5.1.7.2l3.2 2.3c.4.2.6.5.7.8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
            ].map(({ title, desc, icon }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="flex items-start gap-4 px-0 sm:px-8 py-6 sm:py-0 first:pl-0 last:pr-0">
                  <div className="mt-0.5 flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-[0.82rem] font-semibold" style={{ color: 'var(--espresso)' }}>{title}</p>
                    <p className="text-[0.72rem] mt-0.5 leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.5 }}>{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

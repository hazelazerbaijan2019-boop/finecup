import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'

export const metadata: Metadata = {
  title: 'Haqqımızda',
  description: '2020-ci ildən Bakıda specialty qəhvə qovurucuları. Fine Cup Coffee Roasters haqqında.',
  openGraph: {
    title: 'Haqqımızda | Fine Cup Coffee Roasters',
    images: ['/images/fc-roaster-machine.jpg'],
  },
}

const values = [
  { num: '01', title: 'Mənşə Şəffaflığı', desc: 'Hər qəhvəni birbaşa ferma partnyorlarımızdan gətiririk. Vasitəçi yoxdur.' },
  { num: '02', title: 'Dəqiq Qovurma', desc: 'Golden Roaster GR2422 ilə hər lot ayrıca profil üzrə qovrulur.' },
  { num: '03', title: 'Barista Dəstəyi', desc: 'Tərəfdaşlarımıza pulsuz barista təlimi və texniki yardım.' },
  { num: '04', title: 'Vaxtında Çatdırılma', desc: '72 saat ərzində qovrulan qəhvə sizə çatdırılır.' },
  { num: '05', title: 'B2B Tərəfdaşlıq', desc: 'Kafe, restoran, otel üçün fərdi şərtlər və sabit çatdırılma.' },
  { num: '06', title: 'Keyfiyyət Zəmanəti', desc: 'Yalnız 80+ bal alan specialty arabika partiyaları seçirik.' },
]

export default function HaqqimızdaPage() {
  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden" style={{ background: 'var(--espresso)' }}>
        <Image
          src="/images/fc-roaster-machine.jpg"
          alt="Fine Cup Roastery"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 lg:pb-20 w-full">
          <p className="text-[0.58rem] tracking-[0.38em] uppercase mb-5" style={{ color: 'var(--olive-light)' }}>
            Bakı · 2020
          </p>
          <h1 className="font-serif font-light leading-[1.04]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', color: 'var(--cream)' }}>
            Hər dənənin<br />
            <em className="italic" style={{ color: 'var(--olive-light)' }}>hekayəsi</em> var
          </h1>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Text */}
            <div className="space-y-6">
              <Reveal>
                <p className="section-label">Hekayəmiz</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
                  FINE CUP Coffee Roasters
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.62 }}>
                  FINE CUP Coffee Roasters — 2020-ci ildən etibarən Bakıda fəaliyyət göstərən specialty qəhvə
                  qovurucularıdır. Məqsədimiz sadədir: ən yaxşı arabika növlərini birbaşa mənşə ölkəsindən
                  gətirmək, Bakıda öz qovurma seximizdə emal etmək, sizə ən təzə halda çatdırmaq.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.62 }}>
                  Efiopiya, Braziliya, Kolumbiya, Kosta-Rika, Keniya, Peru və daha bir sıra ölkənin ən yaxşı
                  fermalarından seçilmiş qəhvələr. Hər lot Golden Roaster GR2422 avadanlığında dəqiq nəzarət
                  altında qovrulur.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <Link href="/b2b" className="btn-olive inline-flex">
                  B2B tərəfdaşlıq <ArrowRight size={14} weight="bold" />
                </Link>
              </Reveal>
            </div>

            {/* Images */}
            <Reveal delay={100}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden" style={{ background: 'var(--cream-mid)' }}>
                  <Image
                    src="/images/fc-roaster-panel.jpg"
                    alt="Qovurma prosesi"
                    fill
                    className="object-cover product-img"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -right-5 sm:right-0 p-5 shadow-lg"
                  style={{ background: 'var(--olive)', color: 'var(--cream)' }}
                >
                  <p className="text-[0.55rem] tracking-[0.3em] uppercase opacity-70 mb-1">Est.</p>
                  <p className="text-2xl font-serif font-light leading-none">2020</p>
                  <p className="text-[0.55rem] tracking-[0.2em] uppercase opacity-70 mt-1">Bakı</p>
                </div>
                <div
                  className="absolute -top-5 -left-5 sm:left-0 w-[38%] aspect-square overflow-hidden hidden sm:block"
                  style={{ background: 'var(--cream-dark)', border: '4px solid var(--cream)' }}
                >
                  <Image
                    src="/images/fc-beans-tray.jpg"
                    alt="Qəhvə dənələri"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream-mid)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 2020, label: 'İldən fəaliyyətdə', suffix: '' },
              { end: 35, label: 'Məhsul', suffix: '+' },
              { end: 11, label: 'Mənşə ölkə', suffix: '+' },
              { end: 100, label: 'Arabika', suffix: '%' },
            ].map((s) => (
              <Reveal key={s.label}>
                <div>
                  <p className="font-serif text-[2.6rem] md:text-[3.4rem] font-light leading-none tabular-nums" style={{ color: 'var(--espresso)' }}>
                    <CountUp end={s.end} suffix={s.suffix} duration={1200} />
                  </p>
                  <p className="text-[0.62rem] uppercase tracking-widest mt-2" style={{ color: 'var(--espresso)', opacity: 0.45 }}>
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-14">
            <p className="section-label mb-3">Dəyərlərimiz</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
              Niyə Fine Cup?
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 80}>
                <div className="border-t pt-6" style={{ borderColor: 'var(--cream-dark)' }}>
                  <span className="text-[0.58rem] font-medium" style={{ color: 'var(--olive)' }}>{v.num}</span>
                  <h3 className="font-serif text-[1.3rem] font-light mt-3 mb-3" style={{ color: 'var(--espresso)' }}>{v.title}</h3>
                  <p className="text-[0.82rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.58 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS PHOTO ── */}
      <section className="overflow-hidden" style={{ background: 'var(--espresso)' }}>
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[50vw] lg:min-h-[560px]">
            <Image
              src="/images/fc-warehouse.jpg"
              alt="Fine Cup anbarlıq"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(27,19,9,0.25)' }} />
          </div>
          <div className="flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
            <div className="max-w-lg">
              <Reveal>
                <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium mb-4" style={{ color: 'var(--olive-light)' }}>
                  Prosesimiz
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light leading-[1.1]" style={{ color: 'var(--cream)' }}>
                  Mənşədən fincana — tam nəzarət altında
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 space-y-6">
                  {[
                    { step: '01', text: 'Ferma partnyorlarından birbaşa yaşıl dənə alınır' },
                    { step: '02', text: 'Bakıda GR2422 avadanlığında hər lot profil üzrə qovrulur' },
                    { step: '03', text: 'Qovrulan gündən 72 saat ərzində çatdırılır' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <span className="text-[0.58rem] font-semibold pt-0.5 flex-shrink-0" style={{ color: 'var(--olive-light)' }}>{s.step}</span>
                      <p className="text-[0.85rem] leading-relaxed" style={{ color: 'rgba(243,237,216,0.65)' }}>{s.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center">
        <div className="max-w-lg mx-auto px-5">
          <Reveal>
            <p className="section-label mb-3">Kəşf edin</p>
            <h2 className="font-serif text-[2.2rem] font-light mb-6" style={{ color: 'var(--espresso)' }}>
              Məhsullarımızla tanış olun
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/katalog" className="btn-olive">
                Kataloqa bax <ArrowRight size={14} weight="bold" />
              </Link>
              <Link href="/elaqe" className="btn-outline-dark">
                Bizimlə əlaqə
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}

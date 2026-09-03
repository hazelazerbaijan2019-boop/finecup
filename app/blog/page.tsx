import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Reveal from '@/components/Reveal'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Bloq',
  description: 'Fine Cup Coffee Roasters bloqu. Qəhvə mədəniyyəti, dəmləmə üsulları, mənşə ölkələri haqqında.',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* ── HEADER ── */}
      <div className="border-b" style={{ borderColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-16">
          <p className="section-label mb-3">Bloq</p>
          <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] font-light leading-tight" style={{ color: 'var(--espresso)' }}>
            Qəhvə mədəniyyəti
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--espresso)', opacity: 0.5 }}>
            Dəmləmə üsulları, mənşə ölkələri, specialty haqqında
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-16">

        {/* ── FEATURED POST ── */}
        <Reveal>
          <article className="grid lg:grid-cols-2 gap-8 mb-14 pb-14 border-b" style={{ borderColor: 'var(--cream-dark)' }}>
            <Link href={`/blog/${featured.slug}`} className="block relative aspect-[16/10] overflow-hidden group" style={{ background: 'var(--cream-mid)' }}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover product-img"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Link>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[0.58rem] tracking-[0.3em] uppercase px-2.5 py-1 font-medium"
                  style={{ background: 'var(--olive)', color: 'var(--cream)' }}
                >
                  {featured.category}
                </span>
                <span className="text-[0.68rem]" style={{ color: 'var(--stone)' }}>{featured.readTime} oxuma</span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] font-light leading-tight mb-4" style={{ color: 'var(--espresso)' }}>
                {featured.title}
              </h2>
              <p className="text-[0.85rem] leading-relaxed mb-6" style={{ color: 'var(--espresso)', opacity: 0.6 }}>{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem]" style={{ color: 'var(--stone)' }}>{featured.date}</span>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.72rem] uppercase tracking-wider font-medium transition-colors"
                  style={{ color: 'var(--olive)' }}
                >
                  Oxu <ArrowRight size={12} weight="bold" />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── POST GRID ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 80}>
              <article className="group flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden mb-5" style={{ background: 'var(--cream-mid)' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover product-img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[0.57rem] tracking-[0.3em] uppercase px-2 py-1 font-medium"
                    style={{ background: 'var(--olive-muted)', color: 'var(--olive)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[0.65rem]" style={{ color: 'var(--stone)' }}>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-[1.3rem] font-light leading-snug mb-2" style={{ color: 'var(--espresso)' }}>
                  {post.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed mb-4 line-clamp-2 flex-1" style={{ color: 'var(--espresso)', opacity: 0.58 }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t pt-4 mt-auto" style={{ borderColor: 'var(--cream-dark)' }}>
                  <span className="text-[0.65rem]" style={{ color: 'var(--stone)' }}>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-wider font-medium transition-colors"
                    style={{ color: 'var(--olive)' }}
                  >
                    Oxu <ArrowRight size={11} weight="bold" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

    </main>
  )
}

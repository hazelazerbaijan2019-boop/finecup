import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { getPostBySlug, posts } from '@/lib/blog'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const prev = posts[currentIndex - 1]
  const next = posts[currentIndex + 1]

  const paragraphs = post.content.split('\n\n')

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden" style={{ background: 'var(--espresso)' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[0.58rem] tracking-[0.3em] uppercase px-2.5 py-1 font-medium"
              style={{ background: 'var(--olive)', color: 'var(--cream)' }}
            >
              {post.category}
            </span>
            <span className="text-[0.68rem]" style={{ color: 'rgba(243,237,216,0.5)' }}>
              {post.readTime} oxuma
            </span>
          </div>
          <h1
            className="font-serif font-light leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--cream)' }}
          >
            {post.title}
          </h1>
          <p className="mt-3 text-[0.78rem]" style={{ color: 'rgba(243,237,216,0.5)' }}>
            {post.date}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <p className="text-base leading-relaxed mb-8 font-medium" style={{ color: 'var(--espresso)', opacity: 0.75 }}>
          {post.excerpt}
        </p>

        <div className="prose-fc space-y-5">
          {paragraphs.map((block, i) => {
            if (block.startsWith('## ')) {
              return (
                <h2
                  key={i}
                  className="font-serif text-[1.6rem] font-light mt-10 mb-4 leading-tight"
                  style={{ color: 'var(--espresso)' }}
                >
                  {block.replace('## ', '')}
                </h2>
              )
            }
            if (block.startsWith('### ')) {
              return (
                <h3
                  key={i}
                  className="font-serif text-[1.2rem] font-light mt-8 mb-3"
                  style={{ color: 'var(--espresso)' }}
                >
                  {block.replace('### ', '')}
                </h3>
              )
            }
            if (block.startsWith('- ') || block.includes('\n- ')) {
              const items = block.split('\n').filter((l) => l.startsWith('- '))
              return (
                <ul key={i} className="space-y-2 ml-1">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[0.88rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.7 }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--olive)' }} />
                      <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.match(/^\d+\./)) {
              const items = block.split('\n').filter((l) => l.match(/^\d+\./))
              return (
                <ol key={i} className="space-y-2 ml-1">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[0.88rem] leading-relaxed" style={{ color: 'var(--espresso)', opacity: 0.7 }}>
                      <span className="text-[0.65rem] font-semibold flex-shrink-0 pt-0.5" style={{ color: 'var(--olive)' }}>
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ol>
              )
            }
            if (!block.trim()) return null
            return (
              <p
                key={i}
                className="text-[0.88rem] leading-relaxed"
                style={{ color: 'var(--espresso)', opacity: 0.65 }}
                dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              />
            )
          })}
        </div>

        {/* Back + nav */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--cream-dark)' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-wider font-medium mb-10 transition-colors"
            style={{ color: 'var(--olive)' }}
          >
            <ArrowLeft size={13} /> Bloqa qayıt
          </Link>

          {(prev || next) && (
            <div className="grid grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="p-5 border transition-colors group"
                  style={{ borderColor: 'var(--cream-dark)' }}
                >
                  <p className="text-[0.58rem] uppercase tracking-widest mb-2" style={{ color: 'var(--olive)' }}>← Əvvəlki</p>
                  <p className="text-[0.82rem] font-medium leading-snug group-hover:underline" style={{ color: 'var(--espresso)' }}>
                    {prev.title}
                  </p>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="p-5 border transition-colors group text-right"
                  style={{ borderColor: 'var(--cream-dark)' }}
                >
                  <p className="text-[0.58rem] uppercase tracking-widest mb-2" style={{ color: 'var(--olive)' }}>Növbəti →</p>
                  <p className="text-[0.82rem] font-medium leading-snug group-hover:underline" style={{ color: 'var(--espresso)' }}>
                    {next.title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--cream-dark)', background: 'var(--cream-mid)' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="section-label mb-3">Fine Cup</p>
          <h2 className="font-serif text-[2rem] font-light mb-5" style={{ color: 'var(--espresso)' }}>
            Specialty qəhvəni kəşf edin
          </h2>
          <Link href="/qehve" className="btn-olive">
            Qəhvə kataloqu <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>
    </main>
  )
}

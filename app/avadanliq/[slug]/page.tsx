import { getProductBySlug, getProductsByCategory } from '@/lib/products'
import ProductDetail from '@/components/ProductDetail'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getProductsByCategory('avadanliq').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p) return {}
  return { title: p.name, description: p.description }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const p = getProductBySlug(slug)
  if (!p || p.category !== 'avadanliq') notFound()
  return <ProductDetail product={p} />
}

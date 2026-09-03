import type { Metadata } from 'next'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryPageLayout from '@/components/CategoryPageLayout'

export const metadata: Metadata = {
  title: 'Qəhvə',
  description: 'Fine Cup specialty qəhvə dənələri. Single origin və blend qəhvələr.',
}

export default function QehvePage() {
  const prods = getProductsByCategory('qehve')
  return (
    <CategoryPageLayout
      title="Qəhvə"
      description="Single origin, blend və decaf specialty qəhvə dənələri"
      count={prods.length}
      heroImage="/images/fc-bag-white.jpg"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryPageLayout>
  )
}

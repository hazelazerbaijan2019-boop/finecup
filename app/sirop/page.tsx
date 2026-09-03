import type { Metadata } from 'next'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryPageLayout from '@/components/CategoryPageLayout'

export const metadata: Metadata = {
  title: 'Sirop',
  description: 'Professional barista siropları. Pure meyvə siropları və klassik aromatlar.',
}

export default function SiropPage() {
  const prods = getProductsByCategory('sirop')

  return (
    <CategoryPageLayout
      title="Sirop"
      description="Professional barista siropları - meyvə ekstrakt və klassik aromatlar"
      count={prods.length}
      heroImage="/images/fc-hazelnut-syrup.jpg"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryPageLayout>
  )
}

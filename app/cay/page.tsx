import type { Metadata } from 'next'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryPageLayout from '@/components/CategoryPageLayout'

export const metadata: Metadata = {
  title: 'Çay',
  description: 'Premium çay kolleksiyası. Qara, yaşıl, matcha və herbal çaylar.',
}

export default function CayPage() {
  const prods = getProductsByCategory('cay')

  return (
    <CategoryPageLayout
      title="Çay"
      description="Premium qara, yaşıl, matcha və herbal çay kolleksiyası"
      count={prods.length}
      heroImage="/images/tea-matcha.jpg"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryPageLayout>
  )
}

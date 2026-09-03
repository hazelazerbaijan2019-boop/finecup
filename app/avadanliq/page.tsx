import type { Metadata } from 'next'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryPageLayout from '@/components/CategoryPageLayout'

export const metadata: Metadata = {
  title: 'Avadanlıq',
  description: 'Qəhvə hazırlama avadanlığı. Espresso maşınları, dəyirmanlar, filtrlar.',
}

export default function AvadanliqPage() {
  const prods = getProductsByCategory('avadanliq')

  return (
    <CategoryPageLayout
      title="Avadanlıq"
      description="Espresso maşınları, dəyirmanlar, Cold Brewer və aksessuarlar"
      count={prods.length}
      heroImage="/images/fc-roaster-panel.jpg"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryPageLayout>
  )
}

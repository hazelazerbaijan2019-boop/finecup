import type { Metadata } from 'next'
import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryPageLayout from '@/components/CategoryPageLayout'

export const metadata: Metadata = {
  title: 'Kimyəvi maddələr',
  description: 'Espresso maşını baxımı üçün kimyəvi təmizləyicilər.',
}

export default function KimyeviPage() {
  const prods = getProductsByCategory('kimyevi')

  return (
    <CategoryPageLayout
      title="Kimyəvi maddələr"
      description="Avadanlıq texniki baxımı üçün descaler, süd sistemi və qrup başlığı təmizləyiciləri"
      count={prods.length}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryPageLayout>
  )
}

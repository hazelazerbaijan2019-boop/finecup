import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Fine Cup Coffee Roasters',
    default: 'Fine Cup Coffee Roasters — Bakı',
  },
  description:
    '2020-ci ildən Bakıda qovrulmuş specialty qəhvə. Birbaşa mənşə ölkəsindən gətirilmiş arabika, sirop, avadanlıq.',
  keywords: ['qəhvə', 'coffee', 'specialty coffee', 'bakı', 'finecup', 'coffee roasters', 'roasted in baku'],
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://finecup.az',
    siteName: 'Fine Cup Coffee Roasters',
    title: 'Fine Cup Coffee Roasters — Bakı',
    description: '2020-ci ildən Bakıda qovrulmuş specialty qəhvə.',
    images: [{ url: '/images/fc-latte-dark.jpg', width: 1200, height: 630, alt: 'Fine Cup Coffee Roasters' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fine Cup Coffee Roasters',
    description: '2020-ci ildən Bakıda qovrulmuş specialty qəhvə.',
    images: ['/images/fc-latte-dark.jpg'],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fine Cup Coffee Roasters',
  description: '2020-ci ildən Bakıda fəaliyyət göstərən specialty qəhvə qovurucuları.',
  url: 'https://finecup.az',
  telephone: '+994552295522',
  email: 'info@finecup.az',
  address: { '@type': 'PostalAddress', addressLocality: 'Bakı', addressCountry: 'AZ' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
  ],
  sameAs: ['https://instagram.com/finecup.coffee.roasters', 'https://facebook.com/finecup.az'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${geist.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ClientProviders>
          <ScrollProgress />
          <Loader />
          <Cursor />
          <Header />
          <CartSidebar />
          <div className="h-[108px] lg:h-[116px]" aria-hidden="true" />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}

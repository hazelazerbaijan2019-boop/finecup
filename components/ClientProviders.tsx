'use client'

import { CartProvider } from '@/lib/cart'
import { LangProvider } from '@/lib/lang'
import type { ReactNode } from 'react'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <CartProvider>{children}</CartProvider>
    </LangProvider>
  )
}

'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'az' | 'en' | 'ru'

const translations = {
  az: {
    shipping: 'Pulsuz Çatdırılma & Qaytarma: 30,00 ₼-dən yuxarı bütün sifarişlərdə',
    catalog: 'Kataloq', about: 'Haqqımızda', b2b: 'B2B / HoReCa', blog: 'Bloq', contact: 'Əlaqə',
    addToCart: 'Səbətə at', added: 'Əlavə edildi', outOfStock: 'Stokda yox',
    sizeSelect: 'Ölçü seçin', secureCheckout: 'Etibarlı və təhlükəsiz ödəniş',
    delivery: 'Bakı daxili 30 ₼ üzəri pulsuz çatdırılma',
    roastDelivery: 'Qovrulan gündən 72 saat ərzində çatdırılır',
    b2bLine: 'B2B sifarişlər üçün: +994 55 229 55 22',
    flavorNotes: 'Tat notları',
  },
  en: {
    shipping: 'Free Shipping & Returns: On all orders over 30,00 ₼',
    catalog: 'Catalog', about: 'About Us', b2b: 'B2B / HoReCa', blog: 'Blog', contact: 'Contact',
    addToCart: 'Add to Cart', added: 'Added', outOfStock: 'Out of Stock',
    sizeSelect: 'Select size', secureCheckout: 'Guaranteed safe & secure checkout',
    delivery: 'Free delivery in Baku on orders over 30 ₼',
    roastDelivery: 'Delivered within 72 hours from roasting date',
    b2bLine: 'For B2B orders: +994 55 229 55 22',
    flavorNotes: 'Flavor Notes',
  },
  ru: {
    shipping: 'Бесплатная доставка и возврат: На все заказы от 30,00 ₼',
    catalog: 'Каталог', about: 'О нас', b2b: 'B2B / HoReCa', blog: 'Блог', contact: 'Контакт',
    addToCart: 'В корзину', added: 'Добавлено', outOfStock: 'Нет в наличии',
    sizeSelect: 'Выберите размер', secureCheckout: 'Безопасная оплата гарантирована',
    delivery: 'Бесплатная доставка по Баку при заказе от 30 ₼',
    roastDelivery: 'Доставка в течение 72 ч с момента обжарки',
    b2bLine: 'Для B2B заказов: +994 55 229 55 22',
    flavorNotes: 'Вкусовые ноты',
  },
} satisfies Record<Lang, Record<string, string>>

export type Translations = typeof translations.az

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}>({ lang: 'az', setLang: () => {}, t: translations.az })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('az')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

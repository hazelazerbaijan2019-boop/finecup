'use client'

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'

export type CartItem = {
  productId: string
  productName: string
  variantSize: string
  price: number
  quantity: number
  image: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variantSize: string } }
  | { type: 'UPDATE_QTY'; payload: { productId: string; variantSize: string; quantity: number } }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'HYDRATE'; payload: CartItem[] }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.variantSize === action.payload.variantSize
      )
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.productId === action.payload.productId && i.variantSize === action.payload.variantSize
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.variantSize === action.payload.variantSize)
        ),
      }
    case 'UPDATE_QTY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === action.payload.productId && i.variantSize === action.payload.variantSize)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.variantSize === action.payload.variantSize
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'HYDRATE':
      return { ...state, items: action.payload }
    default:
      return state
  }
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  total: number
  itemCount: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (productId: string, variantSize: string) => void
  updateQty: (productId: string, variantSize: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  useEffect(() => {
    try {
      const saved = localStorage.getItem('finecup-cart')
      if (saved) dispatch({ type: 'HYDRATE', payload: JSON.parse(saved) })
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('finecup-cart', JSON.stringify(state.items))
    } catch {}
  }, [state.items])

  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        total,
        itemCount,
        addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
        removeItem: (productId, variantSize) =>
          dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantSize } }),
        updateQty: (productId, variantSize, quantity) =>
          dispatch({ type: 'UPDATE_QTY', payload: { productId, variantSize, quantity } }),
        openCart: () => dispatch({ type: 'OPEN_CART' }),
        closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

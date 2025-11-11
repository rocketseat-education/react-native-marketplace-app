import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { cartService } from '../services/cart.service'

export interface CartProduct {
  id: number
  name: string
  price: string
  quantity: number
  image?: string
}

export type OmitedProductCard = Omit<CartProduct, 'quantity'>

interface CartStore {
  products: CartProduct[]
  total: number
  addItem: (product: OmitedProductCard) => void
  removeProduct: (productId: number) => void
  updateQuantity: (params: { productId: number; quantity: number }) => void
  clearCart: () => void
  getItemCount: () => number
}
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      total: 0,

      addItem: (newProduct) =>
        set((state) => {
          const newProductList = cartService.addProductToCart(
            state.products,
            newProduct,
          )
          const total = cartService.calculateTotal(newProductList)

          return {
            products: newProductList,
            total,
          }
        }),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => 0,
      removeProduct: () => set({}),
      updateQuantity: () => set({}),
    }),
    {
      name: 'marketplace-cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

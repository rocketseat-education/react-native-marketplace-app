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
  addProduct: (product: OmitedProductCard) => void
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

      addProduct: (newProduct) =>
        set((state) =>
          cartService.addProductToCart(state.products, newProduct),
        ),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => cartService.getItemCount(get().products),
      removeProduct: (productId) =>
        set((state) =>
          cartService.removeProductFromList(state.products, productId),
        ),
      updateQuantity: ({ productId, quantity }) =>
        set((state) =>
          cartService.updateProductQuantity({
            productId,
            productList: state.products,
            quantity,
          }),
        ),
    }),
    {
      name: 'marketplace-cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

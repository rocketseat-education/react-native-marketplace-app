import { createElement } from 'react'
import { useBottomSheetStore } from '../../shared/store/bottomsheet-store'
import { useCartStore } from '../../shared/store/cart-store'
import { AddCardBottomSheet } from './components/AddCardBottomSheet'

export const useCartViewModel = () => {
  const { products } = useCartStore()

  const { open: openBottomSheet } = useBottomSheetStore()

  const openCartBottomSheet = () => {
    openBottomSheet({ content: createElement(AddCardBottomSheet) })
  }

  return { products, openCartBottomSheet }
}

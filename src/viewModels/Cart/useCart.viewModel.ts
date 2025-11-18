import { createElement } from 'react'
import { useGetCreditCardsQuery } from '../../shared/queries/credit-cards/use-get-credit-cards.query'
import { useBottomSheetStore } from '../../shared/store/bottomsheet-store'
import { useCartStore } from '../../shared/store/cart-store'
import { AddCardBottomSheet } from './components/AddCardBottomSheet'

export const useCartViewModel = () => {
  const { products } = useCartStore()

  const { open: openBottomSheet } = useBottomSheetStore()

  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCardsQuery()

  const openCartBottomSheet = () => {
    openBottomSheet({ content: createElement(AddCardBottomSheet) })
  }

  return { products, openCartBottomSheet, creditCards, isLoadingCreditCards }
}

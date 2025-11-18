import { useState } from 'react'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { useCartStore } from '../../../../shared/store/cart-store'

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null)

  const { total } = useCartStore()
  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
  }
}

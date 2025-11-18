import { router } from 'expo-router'
import { useState } from 'react'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { useSubmitOrderMutation } from '../../../../shared/queries/orders/use-submit-order.mutation'
import { useCartStore } from '../../../../shared/store/cart-store'

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null)
  const { products, total, clearCart } = useCartStore()

  const createOrderMutation = useSubmitOrderMutation()

  const submitOrderMutation = async () => {
    if (!selectedCreditCard) return

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map(({ id, quantity }) => ({ productId: id, quantity })),
    })

    clearCart()
    router.push('/orders')
  }

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isLoadingOrder: createOrderMutation.isPending,
  }
}

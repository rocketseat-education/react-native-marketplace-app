import { router } from 'expo-router'
import { useState } from 'react'
import { useAppModal } from '../../../../shared/hooks/useAppModal'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { useSubmitOrderMutation } from '../../../../shared/queries/orders/use-submit-order.mutation'
import { localNotificationsService } from '../../../../shared/services/local-notifications.service'
import { useCartStore } from '../../../../shared/store/cart-store'

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null)
  const { products, total, clearCart } = useCartStore()
  const { showSuccess } = useAppModal()

  const createOrderMutation = useSubmitOrderMutation()

  const submitOrderMutation = async () => {
    if (!selectedCreditCard) return

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map(({ id, quantity }) => ({ productId: id, quantity })),
    })

    const firstProduct = products[0]

    if (firstProduct) {
      localNotificationsService.scheduleFeedbackNotification({
        delayInMinutes: 60,
        productId: firstProduct.id,
        productName: firstProduct.name,
      })
    }

    products.forEach(({ id, name }, index) => {
      localNotificationsService.cancelNotifications(
        `${localNotificationsService.NOTIFICATION_IDS.CART_REMINDER}-${id}`,
      )

      localNotificationsService.scheduleFeedbackNotification({
        delayInMinutes: 60 * (index + 1),
        productId: id,
        productName: name,
      })
    })

    clearCart()
    showSuccess({
      title: 'Sucesso!',
      message: 'Pedido feito com sucesso!',
      buttonText: 'Ver pedidos',
      onButtonPress: () => {
        router.push('/orders')
      },
    })
  }

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isLoadingOrder: createOrderMutation.isPending,
  }
}

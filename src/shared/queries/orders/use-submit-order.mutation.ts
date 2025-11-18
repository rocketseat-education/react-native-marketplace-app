import { useMutation } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { SubmitOrderRequestParamsInterface } from '../../interfaces/http/orders'
import { submitOrder } from '../../services/orders.service'

export const useSubmitOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      console.log(response.message)
    },
    onError: (error) => {
      console.log(error)
      Toast.error(error.message ?? 'Falha ao realizar pedido', 'top')
    },
  })

  return mutation
}

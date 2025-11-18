import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { submitOrder } from '../../services/orders.service'

export const useSubmitOrderMutation = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      console.log(response.message)
      queryClient.invalidateQueries({ queryKey: ['user-orders'] })
    },
    onError: (error) => {
      console.log(error)
      Toast.error(error.message ?? 'Falha ao realizar pedido', 'top')
    },
  })

  return mutation
}

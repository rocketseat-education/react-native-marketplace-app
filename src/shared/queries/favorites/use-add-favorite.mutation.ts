import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { addFavorite } from '../../services/favorites.service'

export const useAddFavoriteMutation = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (productId: number) => addFavorite(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
      Toast.success('Produto adicionado aos favoritos!')
    },
    onError: (error) => {
      Toast.error(error.message ?? 'Falha ao adicionar produto nos favoritos')
    },
  })

  return mutation
}

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { removeFavorite } from '../../services/favorites.service'

export const useRemoveFavoriteMutation = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (productId: number) => removeFavorite(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
      Toast.success('Produto removido dos favoritos')
    },
    onError: () => {
      Toast.error('Falha ao remover produto dos favoritos')
    },
  })

  return mutation
}

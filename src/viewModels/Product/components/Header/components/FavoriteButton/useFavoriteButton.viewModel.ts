import { useMemo } from 'react'
import { useGetFavoritesQuery } from '../../../../../../shared/queries/favorites/use-get-favorites.query'

export const useFavoriteButtonViewModel = (productId: number) => {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery()

  const isFavorite: boolean = useMemo(() => {
    return favorites.some(({ id }) => id === productId)
  }, [favorites, productId])

  console.log({ isFavorite })

  return { isFavorite }
}

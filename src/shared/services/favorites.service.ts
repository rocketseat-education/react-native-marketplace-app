import { marketPlaceApiClient } from '../api/market-place'
import { AddFavoriteResponse, Favorite } from '../interfaces/http/favorite'

export const getFavorites = async (): Promise<Favorite[]> => {
  const { data } = await marketPlaceApiClient.get<Favorite[]>('/favorites')
  return data
}

export const addFavorite = async (productId: number) => {
  const { data } = await marketPlaceApiClient.post<AddFavoriteResponse>(
    '/favorites',
    { productId },
  )
  return data
}

export const removeFavorite = async (productId: number) => {
  await marketPlaceApiClient.delete(`/favorites/${productId}`)
}

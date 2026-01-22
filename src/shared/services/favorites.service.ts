import { marketPlaceApiClient } from '../api/market-place'
import { Favorite } from '../interfaces/http/favorite'

export const getFavorites = async (): Promise<Favorite[]> => {
  const { data } = await marketPlaceApiClient.get<Favorite[]>('/favorites')
  return data
}

export const addFavorite = async (productId: number) => {
  await marketPlaceApiClient.post('/favorites', { productId })
}

export const removeFavorite = async (productId: number) => {
  await marketPlaceApiClient.delete(`/favorites/${productId}`)
}

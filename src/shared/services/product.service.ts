import { marketPlaceApiClient } from '../api/market-place'
import { ProductRequest } from '../interfaces/http/product'
import { ProductResponse } from '../interfaces/http/product-response'

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.get<ProductResponse>(
    '/products',
    { params },
  )
  return data
}

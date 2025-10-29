import { marketPlaceApiClient } from '../api/market-place'
import { ProductResponse } from '../interfaces/http/product-response'

interface ProductRequest {
  pagination: {
    page: number
    perPage: number
  }
  filters: {
    from: Date
    to: Date
    categoryIds: number[]
    searchText: string
    minValue: number
    maxValue: number
  }
  sort: {
    averageRating: string
  }
}

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.get<ProductResponse>(
    '/products',
    { params },
  )
  return data
}

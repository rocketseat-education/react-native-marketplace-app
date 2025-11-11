import { marketPlaceApiClient } from '../api/market-place'
import { ProductRequest } from '../interfaces/http/product'
import { GetProductDetailsInterface } from '../interfaces/http/product-detail'
import { ProductResponse } from '../interfaces/http/product-response'
import { ProductCategory } from '../interfaces/product'

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    '/products',
    params,
  )
  return data
}

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    '/products/categories',
  )
  return data
}

export const getProductDetails = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailsInterface>(
    `/products/${id}`,
  )
  return data
}

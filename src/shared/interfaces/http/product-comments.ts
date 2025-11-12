import { ProductComment } from '../product-comment'
import { PaginatedResponse } from './paginated-response'

export interface GetProductCommentsInterface {
  productId: number
  pagination: {
    page: number
    perPage: number
  }
}

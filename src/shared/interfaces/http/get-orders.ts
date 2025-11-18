import { OrderInterface } from '../order'

export interface GetOrdersResponse {
  orders: OrderInterface[]
  totalOrders: number
}

import { marketPlaceApiClient } from '../api/market-place'
import { GetOrdersResponse } from '../interfaces/http/get-orders'
import {
  SubmitOrderRequestParamsInterface,
  SubmitOrderResponse,
} from '../interfaces/http/submit-orders'

export const submitOrder = async (order: SubmitOrderRequestParamsInterface) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrderResponse>(
    '/orders',
    order,
  )

  return data
}

export const getOrders = async () => {
  const { data } = await marketPlaceApiClient.get<GetOrdersResponse>('/orders')
  return data
}

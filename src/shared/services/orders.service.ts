import { marketPlaceApiClient } from '../api/market-place'
import {
  SubmitOrderRequestParamsInterface,
  SubmitOrderResponse,
} from '../interfaces/http/orders'

export const submitOrder = async (order: SubmitOrderRequestParamsInterface) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrderResponse>(
    '/orders',
    order,
  )

  return data
}

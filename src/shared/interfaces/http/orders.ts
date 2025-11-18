export interface SubmitOrderRequestParamsInterface {
  creditCardId: number
  items: [
    {
      productId: number
      quantity: number
    },
  ]
}

export interface SubmitOrderResponse {
  message: string
  ordersCount: number
  orders: [
    {
      id: number
      productId: number
      quantity: number
      totalPrice: number
    },
  ]
}

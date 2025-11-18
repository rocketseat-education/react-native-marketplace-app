import { marketPlaceApiClient } from '../api/market-place'
import { CreditCard } from '../interfaces/credit-card'
import {
  CreateCreditCardRequestParams,
  CreateCreditCardResponse,
} from '../interfaces/http/create-credit-card'

export const getCreditCards = async () => {
  const { data } = await marketPlaceApiClient.get<CreditCard[]>('/credit-cards')

  return data
}

export const createCreditCard = async (
  creditCardData: CreateCreditCardRequestParams,
) => {
  const { data } = await marketPlaceApiClient.post<CreateCreditCardResponse>(
    '/credit-cards',
    creditCardData,
  )
  return data
}

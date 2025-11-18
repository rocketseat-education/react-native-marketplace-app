import { marketPlaceApiClient } from '../api/market-place'
import { GetCreditCardsResponse } from '../interfaces/http/credit-card'

export const getCreditCards = async () => {
  const { data } =
    await marketPlaceApiClient.get<GetCreditCardsResponse>('/credit-cards')

  return data
}

import { useQuery } from '@tanstack/react-query'
import { getCreditCards } from '../../services/credit-card.service'

export const useGetCreditCardsQuery = () => {
  const query = useQuery({
    queryFn: getCreditCards,
    queryKey: ['credit-cards'],
    staleTime: 1000 * 60 * 5,
  })

  return query
}

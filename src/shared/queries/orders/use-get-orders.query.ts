import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../../services/orders.service'

export const useGetOrdersQuery = () => {
  const query = useQuery({
    queryFn: getOrders,
    queryKey: ['user-orders'],
    staleTime: 1000 * 60 * 10,
  })

  return query
}

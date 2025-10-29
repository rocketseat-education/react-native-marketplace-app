import { useInfiniteQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/product.service'

export const useProductInfiniteQuery = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
        })

        return response
      } catch (error) {
        throw error
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
    },
    initialPageParam: 1,
    queryKey: ['products'],
  })

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  }
}

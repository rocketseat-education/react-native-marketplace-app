import { useGetProductCategoriesQuery } from '../../../../shared/queries/product/use-get-product-categories'

export const useFilterViewModel = () => {
  const {
    data: productCategories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()

  return {
    productCategories,
    isLoading,
  }
}

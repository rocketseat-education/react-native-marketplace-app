import { useGetProductDetails } from '../../shared/queries/product/use-get-product-details'

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetails(productId)
  return {
    isLoading,
    productDetails,
    error,
  }
}

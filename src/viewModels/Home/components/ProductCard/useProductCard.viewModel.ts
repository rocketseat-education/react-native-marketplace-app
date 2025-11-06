import { ProductInterface } from '../../../../shared/interfaces/product'

interface UseProductCardViewModelParams {
  product: ProductInterface
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelParams) => {
  const formatRating = product.averageRating.toFixed(1)

  return { product, formatRating }
}

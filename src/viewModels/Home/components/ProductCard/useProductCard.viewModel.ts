import { ProductInterface } from '../../../../shared/interfaces/product'

interface UseProductCardViewModelParams {
  product: ProductInterface
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelParams) => {
  return { product }
}

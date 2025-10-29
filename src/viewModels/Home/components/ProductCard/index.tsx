import { FC } from 'react'
import { Text, View } from 'react-native'
import { ProductInterface } from '../../../../shared/interfaces/product'
import { ProductCardView } from './ProductCard.view'
import { useProductCardViewModel } from './useProductCard.viewModel'

interface ProductCardProps {
  product: ProductInterface
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const viewModel = useProductCardViewModel(props)
  return <ProductCardView {...viewModel} />
}

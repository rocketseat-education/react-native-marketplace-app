import { FC } from 'react'
import { Text, View } from 'react-native'
import { ProductInterface } from '../../../../shared/interfaces/product'
import { useProductCardViewModel } from './useProductCard.viewModel'

export const ProductCardView: FC<
  ReturnType<typeof useProductCardViewModel>
> = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  )
}

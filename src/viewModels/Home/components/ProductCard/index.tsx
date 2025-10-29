import { FC } from 'react'
import { Text, View } from 'react-native'
import { ProductInterface } from '../../../../shared/interfaces/product'

interface ProductCardProps {
  product: ProductInterface
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  )
}

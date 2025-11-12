import { FC } from 'react'
import { Text, View } from 'react-native'

interface AddToCartSuccessModalParams {
  productName: string
  onGoToCart: () => void
  onClose: () => void
  onContinueShopping: () => void
}

export const AddToCartSuccessModal: FC<AddToCartSuccessModalParams> = ({
  productName,
  onGoToCart,
  onClose,
  onContinueShopping,
}) => {
  return (
    <View className="bg-white rounded-xl p-6 w-full max-w-sm">
      <Text>{productName} foi adicionado ao carrinho!</Text>
    </View>
  )
}

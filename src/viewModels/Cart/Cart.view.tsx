import { FC } from 'react'
import { View } from 'react-native'
import { useCartViewModel } from './useCart.viewModel'

export const CartView: FC<ReturnType<typeof useCartViewModel>> = () => {
  return <View></View>
}

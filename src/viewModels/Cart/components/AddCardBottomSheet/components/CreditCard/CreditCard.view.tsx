import { FC } from 'react'
import { View } from 'react-native'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel>
> = ({}) => {
  return <View className="h-[192px]"></View>
}

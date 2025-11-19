import { FC } from 'react'
import { View } from 'react-native'
import { FocusedField } from '../../useAddCardBottomSheet.viewModel'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null
  }
> = ({ focusedField }) => {
  return <View className="h-[192px]"></View>
}

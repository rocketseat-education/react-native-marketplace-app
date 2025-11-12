import { FC } from 'react'
import { Text, View } from 'react-native'
import { useReviewBottomSheetViewModel } from './useReviewBottomSheet.viewModel'

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({}) => {
  return (
    <View>
      <Text>Review do produto</Text>
    </View>
  )
}

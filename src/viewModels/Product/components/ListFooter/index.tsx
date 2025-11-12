import { FC } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../../../styles/colors'

interface ListFooterParams {
  isLoadingMore: boolean
}

export const ListFooter: FC<ListFooterParams> = ({ isLoadingMore }) => {
  if (!isLoadingMore) return null
  return (
    <View className="py-4">
      <ActivityIndicator color={colors['purple-base']} size="small" />
    </View>
  )
}

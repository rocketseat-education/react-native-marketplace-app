import { FC } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { colors } from '../../../../styles/colors'

interface FooterParams {
  isLoading: boolean
}

export const Footer: FC<FooterParams> = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <View>
      <ActivityIndicator size="small" color={colors['purple-base']} />
    </View>
  )
}

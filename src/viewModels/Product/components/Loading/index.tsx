import { ActivityIndicator, Text, View } from 'react-native'
import { colors } from '../../../../styles/colors'

export const Loading = () => {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color={colors['purple-base']} size="large" />
        <Text className="mt-4 text-base text-purple-base">
          Carregando produto...
        </Text>
      </View>
    </View>
  )
}

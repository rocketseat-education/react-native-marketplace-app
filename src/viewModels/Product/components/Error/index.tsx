import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Text, View } from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { colors } from '../../../../styles/colors'

export const ProductError = () => {
  return (
    <View className="flex-1 bg-background items-center justify-center px-6">
      <Ionicons name="alert-circle" color={colors.danger} size={40} />
      <Text className="text-xl text-center text-danger mt-5">
        Ocorreu um erro ao buscar os detalhes do produto!
      </Text>
      <AppButton onPress={router.back} className="mt-4">
        Voltar
      </AppButton>
    </View>
  )
}

import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Text, View } from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { colors } from '../../../../styles/colors'

export const EmptyList = () => {
  return (
    <>
      <View className="flex-1 items-center px-20 pt-16">
        <Ionicons name="cart-outline" size={36} color={colors.gray[200]} />

        <Text className="text-sm font-bold text-gray-400 my-4">
          Seu carrinho está vazio
        </Text>
        <Text className="text-sm text-gray-400 text-center mb-8">
          Explore o catálogo de produtos e faça sua primeira compra!
        </Text>
      </View>
      <AppButton
        onPress={() => router.push('/home')}
        leftIcon="storefront-outline"
        variant="outlined"
        className="w-[197px] self-center"
      >
        Explorar produtos
      </AppButton>
    </>
  )
}

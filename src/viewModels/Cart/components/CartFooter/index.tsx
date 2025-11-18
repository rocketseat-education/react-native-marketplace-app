import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { useCartStore } from '../../../../shared/store/cart-store'
import { colors } from '../../../../styles/colors'

interface CartFooterParams {
  openCartBottomSheet: () => void
  creditCards: CreditCard[]
  isLoadingCreditCards: boolean
}

export const CartFooter: FC<CartFooterParams> = ({
  openCartBottomSheet,
  creditCards,
  isLoadingCreditCards,
}) => {
  const { total } = useCartStore()

  return (
    <View className="bg-white p-4 rounded-lg mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-[10px] font-semibold text-gray-600 uppercase">
          Valor total
        </Text>
        <AppPriceText
          value={total}
          classNameCurrency="text-base text-gray-900 font-bold"
          classNameValue="text-base text-gray-900 font-bold"
        />
      </View>

      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[10px] font-semibold text-gray-600 uppercase">
            Cartões de crédito
          </Text>

          <TouchableOpacity
            onPress={openCartBottomSheet}
            className="flex-row items-center"
          >
            <Ionicons
              name="card-outline"
              size={20}
              color={colors['purple-base']}
            />
            <Text className="text-purple-base ml-2 font-bold">
              Adicionar cartão
            </Text>
          </TouchableOpacity>
        </View>

        {isLoadingCreditCards ? (
          <View className="py-4 items-center">
            <ActivityIndicator size="small" color={colors['purple-base']} />
            <Text className="text-gray-500 text-sm mt-2">
              Carregando cartões
            </Text>
          </View>
        ) : (
          <FlatList
            data={creditCards}
            renderItem={({ item }) => <Text>{item.titularName}</Text>}
            keyExtractor={(item) => `credit-card-id-${item.id}`}
          />
        )}

        <AppButton className="mt-4">Confirmar compra</AppButton>
      </View>
    </View>
  )
}

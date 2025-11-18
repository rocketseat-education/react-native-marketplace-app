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
import { colors } from '../../../../styles/colors'
import { CreditCardItem } from '../CreditCardItem'
import { CartFooterParams } from '.'
import { useCartFooterViewModel } from './useCartFooter.viewModel'

export const CartFooterView: FC<
  ReturnType<typeof useCartFooterViewModel> & CartFooterParams
> = ({
  openCartBottomSheet,
  creditCards,
  isLoadingCreditCards,
  total,
  selectedCreditCard,
  setSelectedCreditCard,
}) => {
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
            renderItem={({ item: creditCard }) => (
              <CreditCardItem
                creditCard={creditCard}
                isSelected={creditCard.id === selectedCreditCard?.id}
                setSelectedCreditCard={setSelectedCreditCard}
              />
            )}
            keyExtractor={(item) => `credit-card-id-${item.id}`}
            className="gap-2"
          />
        )}

        <AppButton className="mt-4">Confirmar compra</AppButton>
      </View>
    </View>
  )
}

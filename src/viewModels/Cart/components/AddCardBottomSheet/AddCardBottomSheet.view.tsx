import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { AppInput } from '../../../../shared/components/AppInput'
import { AppInputController } from '../../../../shared/components/AppInputController'
import { colors } from '../../../../styles/colors'
import { useAddCardBottomSheetViewModel } from './useAddCardBottomSheet.viewModel'

export const AddCardBottomSheetView: FC<
  ReturnType<typeof useAddCardBottomSheetViewModel>
> = ({
  handleCreateCreditCard,
  control,
  expirationDateMask,
  cardNumberMask,
}) => {
  return (
    <ScrollView className="flex-1">
      <View className="p-8">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-base font-bold text-gray-500">
            Adicionar cartão
          </Text>
          <TouchableOpacity className="w-8 items-center justify-center border border-gray-400 rounded-[10px]">
            <Ionicons name="close-outline" size={24} color={colors.gray[400]} />
          </TouchableOpacity>
        </View>

        <View className="mt-6 gap-4">
          <AppInputController
            control={control}
            name="titularName"
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome completo"
          />
          <AppInputController
            control={control}
            name="number"
            leftIcon="card-outline"
            label="NÚMERO"
            placeholder="Número do cartão"
            keyboardType="numeric"
            mask={cardNumberMask}
            maxLength={19}
          />
          <View className="flex-row gap-4">
            <View className="flex-1">
              <AppInputController
                control={control}
                name="expirationDate"
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
                mask={expirationDateMask}
              />
            </View>
            <View className="flex-1">
              <AppInputController
                control={control}
                name="CVV"
                leftIcon="lock-closed-outline"
                label="CVV"
                placeholder="000"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View className="flex-row gap-4 pb-5 mt-8">
          <View className="flex-1">
            <AppButton variant="outlined">Cancelar</AppButton>
          </View>
          <View className="flex-1">
            <AppButton>Salvar</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

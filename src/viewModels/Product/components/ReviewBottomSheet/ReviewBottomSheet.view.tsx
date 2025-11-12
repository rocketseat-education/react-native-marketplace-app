import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { AppInput } from '../../../../shared/components/AppInput'
import { colors } from '../../../../styles/colors'
import { useReviewBottomSheetViewModel } from './useReviewBottomSheet.viewModel'

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({}) => {
  return (
    <View className="bg-background rounded-t-2xl">
      <View className="flex-row items-center justify-between p-6">
        <Text className="text-lg font-bold text-gray-900">Avaliar produto</Text>
        <TouchableOpacity className="size-8 items-center justify-center rounded-[10px] border border-gray-400">
          <Ionicons name="close" size={24} color={colors.gray[400]} />
        </TouchableOpacity>
      </View>

      <View className="p-6">
        <Text className="font-semibold text-base text-gray-300">Nota</Text>
        <View className="flex-row items-center mb-6 gap-2">
          <Ionicons name="star-outline" size={32} />
          <Ionicons name="star-outline" size={32} />
          <Ionicons name="star-outline" size={32} />
          <Ionicons name="star-outline" size={32} />
          <Ionicons name="star-outline" size={32} />
        </View>

        <AppInput
          label="COMENTÁRIO"
          placeholder="Escreva sua avaliação"
          value=""
          multiline
          numberOfLines={8}
          textAlign="left"
          containerClassName="mb-8"
          className="h-[150px]"
        />

        <View className="flex-row gap-3 mb-6">
          <AppButton variant="outlined" className="flex-1" onPress={() => {}}>
            Cancelar
          </AppButton>
          <AppButton className="flex-1" onPress={() => {}}>
            Enviar
          </AppButton>
        </View>
      </View>
    </View>
  )
}

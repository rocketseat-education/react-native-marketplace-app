import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { ProductInterface } from '../../../../shared/interfaces/product'
import { colors } from '../../../../styles/colors'
import { useProductCardViewModel } from './useProductCard.viewModel'

export const ProductCardView: FC<
  ReturnType<typeof useProductCardViewModel>
> = ({ product, formatRating }) => {
  return (
    <TouchableOpacity className="w-[48%] my-1 rounded-xl shadow-sm overflow-hidden h-[157px] p-[4px] bg-white mb-2">
      <View>
        <Image
          source={{ uri: product.photo }}
          className="w-full h-[96px] rounded-md"
          resizeMode="cover"
        />
        <View className="absolute top-0 right-0 flex-row items-center px-2 py-1 rounded-b-lg rounded-r-none bg-white">
          <Ionicons name="star" size={12} color={colors['blue-base']} />
          <Text className="text-sm font-semibold ml-1">{formatRating}</Text>
        </View>
      </View>
      <View className="p-3">
        <Text className="text-xs font-semibold mb-1" numberOfLines={1}>
          {product.name}
        </Text>
        <View className="flex-row items-center justify-between">
          <AppPriceText
            classNameCurrency="text-sm"
            classNameValue="text-lg font-bold flex-1"
            value={Number(product.value)}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

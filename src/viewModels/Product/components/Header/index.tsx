import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { buildImageUrl } from '../../../../shared/helpers/buildImageUrl'
import { GetProductDetailsInterface } from '../../../../shared/interfaces/http/product-detail'
import { colors } from '../../../../styles/colors'

interface HeaderParams {
  productDetails: GetProductDetailsInterface
  onOpenReviewBottomSheet: () => void
}

export const Header: FC<HeaderParams> = ({
  productDetails,
  onOpenReviewBottomSheet,
}) => {
  return (
    <>
      <View className="pb-5 items-start">
        <TouchableOpacity
          onPress={router.back}
          className="w-full justify-start flex-row items-center gap-3"
        >
          <Ionicons name="arrow-back" size={24} color={colors['purple-base']} />
          <Text className="text-base font-bold text-purple-base">Voltar</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full rounded-lg shadow-xl shadow-gray-500/30 bg-white">
        <Image
          source={{
            uri: productDetails.photo,
          }}
          className="w-full rounded-lg h-[192px]"
        />
        <View className="items-center absolute top-0 right-0 flex-row bg-blue-light px-2 py-1 rounded-bl-lg rounded-tr-lg">
          <Ionicons name="star" size={16} color={colors['blue-base']} />
          <Text className="text-sm font-semibold ml-1 text-gray-800">
            {productDetails.averageRating.toFixed(1)}
          </Text>
          <Text className="text-[10px] font-semibold ml-1 text-gray-800">
            / 5
          </Text>
        </View>
      </View>

      <View className="py-8">
        <View className="flex-row justify-between items-baseline mb-4">
          <Text className="text-xl font-bold text-gray-800 max-w-[70%]">
            {productDetails.name}
          </Text>
          <View>
            <AppPriceText
              value={Number(productDetails.value)}
              classNameValue="text-xl font-bold text-gray-800 ml-1"
            />
          </View>
        </View>

        <View className="flex-row items-center bg-blue-light p-3 rounded-lg mb-4">
          <View className="bg-blue-base size-[36px] rounded-[6px] items-center justify-center">
            <Ionicons name="trending-up" size={20} color={colors.white} />
          </View>
          <Text className="text-sm text-gray-600 flex-1 ml-5">
            <Text className="font-bold">{productDetails.views} pessoas </Text>
            visualizaram este produto nos últimos 7 dias
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-base leading-6 text-gray-500">
            {productDetails.description}
          </Text>
        </View>

        {(productDetails.width || productDetails.height) && (
          <View className="mb-4">
            {productDetails.width && (
              <Text className="text-base text-gray-500 mb-1">
                <Text className="text-gray-800">Largura:</Text>{' '}
                {productDetails.width}
              </Text>
            )}
            {productDetails.height && (
              <Text className="text-base text-gray-500 mb-1">
                <Text className="text-gray-800">Altura:</Text>{' '}
                {productDetails.height}
              </Text>
            )}
          </View>
        )}

        <View className="mb-6">
          <Text className="text-base font-bold text-gray-800">Categoria</Text>
          <Text className="text-base text-gray-600">
            {productDetails.category.name}
          </Text>
        </View>

        <View className="flex-row items-center justify-between pt-4 border-t border-gray-200">
          <Text className="text-base font-bold text-gray-800">Avaliações</Text>

          <TouchableOpacity onPress={onOpenReviewBottomSheet}>
            <Text className="text-purple-base text-base font-medium">
              Avaliar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { buildImageUrl } from '../../../../shared/helpers/buildImageUrl'
import { CartProduct } from '../../../../shared/store/cart-store'
import { useProductCartCardViewModel } from './useProductCartCard.viewModel'

interface ProductCartCardViewParams
  extends ReturnType<typeof useProductCartCardViewModel> {
  product: CartProduct
}

export const ProductCartCardView: FC<ProductCartCardViewParams> = ({
  product,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <View className="bg-white h-[71px] flex-row items-center px-2 mb-2 rounded-lg">
      <Image
        source={{ uri: buildImageUrl(product?.image ?? '') }}
        className="size-16 rounded-md mr-4"
        resizeMode="cover"
      />
      <View className="flex-1 mr-3 gap-1">
        <Text className="text-sm text-gray-400 line-clamp-1 max-w-[180px]">
          {product.name}
        </Text>

        <AppPriceText
          classNameCurrency="text-sm font-bold"
          classNameValue="text-sm font-bold"
          value={Number(product.price)}
        />
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => handleDecrement(product.id, product.quantity)}
          className="border-[1.2px] size-[18px] border-purple-base rounded-md items-center justify-center"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            -
          </Text>
        </TouchableOpacity>

        <View className="mx-2 items-center justify-center min-w-[24px] border-b border-gray-300">
          <Text className="font-medium text-gray-700">{product.quantity}</Text>
        </View>

        <TouchableOpacity
          onPress={() => handleIncrement(product.id, product.quantity)}
          className="border-[1.2px] size-[18px] border-purple-base rounded-md items-center justify-center"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

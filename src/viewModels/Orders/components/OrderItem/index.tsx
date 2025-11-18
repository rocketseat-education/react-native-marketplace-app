import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { buildImageUrl } from '../../../../shared/helpers/buildImageUrl'
import { OrderInterface } from '../../../../shared/interfaces/order'

interface OrderItemParams {
  order: OrderInterface
}

export const OrderItem: FC<OrderItemParams> = ({ order }) => {
  return (
    <View className="flex-row items-center bg-white p-1 mb-3 rounded-lg">
      <Image
        source={{ uri: buildImageUrl(order.productPhoto) }}
        className="h-[81px] w-[88px] rounded-lg mr-4"
        resizeMode="cover"
      />

      <View className="flex-1 justify-between py-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text
            className="text-sm font-semibold text-gray-900 flex-1"
            numberOfLines={1}
          >
            {order.productName}
          </Text>

          <Text>{order.createdAt.toString()}</Text>
        </View>

        <Text>
          {order.quantity} - {order.totalPrice}
        </Text>
        <Text>{order.creditCard.maskedNumber}</Text>
      </View>
    </View>
  )
}

import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useOrdersViewModel } from './useOrders.viewModel'

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={orders}
        renderItem={({ item: order }) => <Text>{order.productName}</Text>}
      />
    </SafeAreaView>
  )
}

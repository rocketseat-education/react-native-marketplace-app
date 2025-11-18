import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartFooter } from './components/CartFooter'
import { CartHeader } from './components/CartHeader'
import { EmptyList } from './components/EmptyList'
import { ProductCartCard } from './components/ProductCartCard'
import { useCartViewModel } from './useCart.viewModel'

export const CartView: FC<ReturnType<typeof useCartViewModel>> = ({
  products,
  openCartBottomSheet,
  creditCards,
  isLoadingCreditCards,
}) => {
  return (
    <SafeAreaView>
      <FlatList
        contentContainerClassName="px-6"
        data={products}
        renderItem={({ item }) => <ProductCartCard product={item} />}
        keyExtractor={({ id }) => `product-cart-id-${id}`}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={<CartHeader />}
        ListFooterComponent={
          products.length > 0 ? (
            <CartFooter
              openCartBottomSheet={openCartBottomSheet}
              creditCards={creditCards}
              isLoadingCreditCards={isLoadingCreditCards}
            />
          ) : undefined
        }
      />
    </SafeAreaView>
  )
}

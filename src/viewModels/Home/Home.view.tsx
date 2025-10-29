import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductInterface } from '../../shared/interfaces/product'
import { HomeHeader } from './components/Header'
import { ProductCard } from './components/ProductCard'
import { SearchInput } from './components/SearchInput'
import { useHomeViewModel } from './useHome.viewModel'

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
}) => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-4 pb-[120px]"
      />
    </SafeAreaView>
  )
}

import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from './components/Header'
import { useProductViewModel } from './useProduct.viewModel'

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  isLoading,
  productDetails,
  error,
}) => {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>
  }

  if (!productDetails) {
    return null
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => <Header productDetails={productDetails} />}
        className="px-6"
      />
    </SafeAreaView>
  )
}

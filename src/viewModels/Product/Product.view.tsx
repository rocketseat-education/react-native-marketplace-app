import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProductViewModel } from './useProduct.viewModel'

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  isLoading,
  productDetails,
  error,
}) => {
  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => (
          <>
            <Text>{productDetails?.name}</Text>
          </>
        )}
      />
    </SafeAreaView>
  )
}

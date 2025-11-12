import { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommentItem } from './components/CommentItem'
import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { ListFooter } from './components/ListFooter'
import { Loading } from './components/Loading'
import { useProductViewModel } from './useProduct.viewModel'

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  isLoading,
  productDetails,
  error,
  comments,
  isLoadingComments,
  errorComments,
  handleLoadMore,
  handleRefetch,
  handleEndReached,
  isRefetching,
  isFetchingNextPage,
}) => {
  console.log(comments)

  if (error) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>
  }

  if (!productDetails) {
    return null
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={() => <Header productDetails={productDetails} />}
        className="px-6"
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={() => (
          <ListFooter isLoadingMore={isFetchingNextPage} />
        )}
        ListEmptyComponent={<EmptyList isLoadingComments={isLoadingComments} />}
      />
    </SafeAreaView>
  )
}

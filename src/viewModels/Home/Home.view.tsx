import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeHeader } from './components/Header'
import { SearchInput } from './components/SearchInput'

export const HomeView = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
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

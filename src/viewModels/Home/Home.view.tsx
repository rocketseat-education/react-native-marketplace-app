import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeHeader } from './components/Header'

export const HomeView = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<HomeHeader />}
        contentContainerClassName="px-4 pb-[120px]"
      />
    </SafeAreaView>
  )
}

import { FC } from 'react'
import { View } from 'react-native'
import { useFilterViewModel } from './useFilter.viewModel'

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = () => {
  return <View></View>
}

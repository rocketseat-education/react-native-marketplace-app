import { FC } from 'react'
import { Text, View } from 'react-native'
import { useAppPriceTextViewModel } from './useAppPriceText.viewModel'

export const AppPriceTextView: FC<
  ReturnType<typeof useAppPriceTextViewModel> & {
    classNameCurrency?: string
    classNameValue?: string
  }
> = ({
  classNameCurrency,
  classNameValue,
  currencySymbol,
  valueText,
  value,
  formatPrice,
}) => {
  return (
    <View className="flex-row items-baseline">
      <Text className={classNameCurrency ?? 'text-sm text-gray-900'}>
        {currencySymbol}
      </Text>
      <Text className={classNameValue ?? 'text-2xl font-bold text-gray-900'}>
        {' '}
        {valueText}
      </Text>
    </View>
  )
}

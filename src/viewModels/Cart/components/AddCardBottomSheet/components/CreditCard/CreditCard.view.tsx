import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { colors } from '../../../../../../styles/colors'
import { FocusedField } from '../../useAddCardBottomSheet.viewModel'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

const PURPLE_GRADIENT: readonly [string, string, string] = [
  '#5B3A8F',
  '#6B5CA5',
  '#7B6CB5',
]

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null
  }
> = ({ focusedField }) => {
  return (
    <View className="h-[192px]">
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: '100%',
            height: 192,
            backfaceVisibility: 'hidden',
          },
        ]}
      >
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{ flex: 1, borderRadius: 16, padding: 20 }}
        >
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-12 h-8 bg-yellow-400 rounded-md" />
          </View>

          <View
            className={clsx('py-2 px-1 rounded-lg mb-6', {
              '': focusedField !== 'number',
              'bg-white/20': focusedField === 'number',
            })}
          >
            <Text className="text-white text-lg tracking-widest text-center">
              123
            </Text>
          </View>

          <View className="flex-row justify-between items-end">
            <View
              className={clsx('flex-1 p-2 rounded-lg', {
                '': focusedField !== 'name',
                'bg-white/20': focusedField === 'name',
              })}
            >
              <Text className="text-white text-sm font-bold uppercase">
                PORTADOR
              </Text>
              <Text className="text-white text-sm font-bold uppercase">
                NOME DO TITULAR
              </Text>
            </View>

            <View
              className={clsx('ml-4 p-1 rounded-lg', {
                '': focusedField !== 'expiry',
                'bg-white/20': focusedField === 'expiry',
              })}
            >
              <Text className="text-white text-xs mb-1 font-semibold">
                VÁLIDO ATÉ
              </Text>
              <Text className="text-white text-sm font-bold">"MM/AA"</Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
      <Animated.View></Animated.View>
    </View>
  )
}

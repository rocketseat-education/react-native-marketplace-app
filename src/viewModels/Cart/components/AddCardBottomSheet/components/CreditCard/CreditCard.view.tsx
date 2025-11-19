import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { colors } from '../../../../../../styles/colors'
import { FocusedField } from '../../useAddCardBottomSheet.viewModel'
import { CardData } from '.'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

const PURPLE_GRADIENT: readonly [string, string, string] = [
  '#5B3A8F',
  '#6B5CA5',
  '#7B6CB5',
]

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null
  } & { cardData: CardData }
> = ({
  focusedField,
  frontAnimatedStyle,
  backAnimatedStyle,
  cardData,
  formatCardNumber,
}) => {
  return (
    <View className="h-[192px]">
      <Animated.View
        style={[
          frontAnimatedStyle,
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
              'bg-white/20': focusedField === 'number',
            })}
          >
            <Text className="text-white text-lg tracking-widest text-center">
              {formatCardNumber(cardData.number)}
            </Text>
          </View>

          <View className="flex-row justify-between items-end">
            <View
              className={clsx('flex-1 p-2 rounded-lg', {
                'bg-white/20': focusedField === 'name',
              })}
            >
              <Text className="text-white text-sm font-bold uppercase">
                PORTADOR
              </Text>
              <Text className="text-white text-sm font-bold uppercase">
                {cardData.name.length > 0 ? cardData.name : 'NOME DO TITULAR'}
              </Text>
            </View>

            <View
              className={clsx('ml-4 p-1 rounded-lg', {
                'bg-white/20': focusedField === 'expiry',
              })}
            >
              <Text className="text-white text-xs mb-1 font-semibold">
                VÁLIDO ATÉ
              </Text>
              <Text className="text-white text-sm font-bold">
                {cardData.expiry.length > 0 ? cardData.expiry : 'MM/AA'}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
      <Animated.View
        style={[
          backAnimatedStyle,
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
          style={{ flex: 1, borderRadius: 16 }}
        >
          <View className="h-[40px] bg-black w-full mt-[20px]" />
          <View className="flex-1 justify-center items-end px-5">
            <View className="w-24">
              <Text className="text-white text-xs font-semibold mb-2">CVV</Text>

              <View
                className={clsx('bg-white p-2 rounded h-8 justify-center', {
                  'bg-blue-100': focusedField === 'cvv',
                })}
              >
                <Text>{cardData.cvv || '...'}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  )
}

import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { useCartStore } from '../../../../shared/store/cart-store'
import { colors } from '../../../../styles/colors'
import { CreditCardItem } from '../CreditCardItem'
import { CartFooterView } from './CartFooter.view'
import { useCartFooterViewModel } from './useCartFooter.viewModel'

export interface CartFooterParams {
  openCartBottomSheet: () => void
  creditCards: CreditCard[]
  isLoadingCreditCards: boolean
}

export const CartFooter: FC<CartFooterParams> = ({
  openCartBottomSheet,
  creditCards,
  isLoadingCreditCards,
}) => {
  const viewModel = useCartFooterViewModel()

  return (
    <CartFooterView
      {...viewModel}
      openCartBottomSheet={openCartBottomSheet}
      creditCards={creditCards}
      isLoadingCreditCards={isLoadingCreditCards}
    />
  )
}

import { FC } from 'react'
import { View } from 'react-native'
import { AppButton } from '../../../../shared/components/AppButton'
import { AppPriceText } from '../../../../shared/components/AppPriceText'
import { ProductInterface } from '../../../../shared/interfaces/product'

interface AddToCardFooterParams {
  product: ProductInterface
}

export const AddToCardFooter: FC<AddToCardFooterParams> = ({ product }) => {
  return (
    <View className="fixed justify-between items-center bg-white bottom-0 right-0 left-0 p-7 h-[126px] flex-row">
      <AppPriceText value={Number(product.value)} />

      <AppButton leftIcon="cart-outline" className="w-[120px] h-[40px]">
        Adicionar
      </AppButton>
    </View>
  )
}

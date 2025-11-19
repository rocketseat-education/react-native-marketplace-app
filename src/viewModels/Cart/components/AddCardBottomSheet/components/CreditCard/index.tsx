import { FC } from 'react'
import { FocusedField } from '../../useAddCardBottomSheet.viewModel'
import { CreditCardView } from './CreditCard.view'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

interface CreditCardParams {
  isFlipped: boolean
  focusedField: FocusedField | null
}

export const CreditCard: FC<CreditCardParams> = ({
  isFlipped,
  focusedField,
}) => {
  const viewModel = useCreditCardViewModel(isFlipped)

  return <CreditCardView focusedField={focusedField} {...viewModel} />
}

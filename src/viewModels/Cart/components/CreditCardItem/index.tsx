import { FC } from 'react'
import { CreditCard } from '../../../../shared/interfaces/credit-card'
import { CreditCardItemView } from './CreditCardItem.view'
import { useCreditCardItemViewModel } from './useCreditCardItem.viewModel'

interface CreditCardItemParams {
  creditCard: CreditCard
}

export const CreditCardItem: FC<CreditCardItemParams> = ({ creditCard }) => {
  const viewModel = useCreditCardItemViewModel(creditCard)
  return <CreditCardItemView {...viewModel} />
}

import { CreditCardView } from './CreditCard.view'
import { useCreditCardViewModel } from './useCreditCard.viewModel'

export const CreditCard = () => {
  const viewModel = useCreditCardViewModel()

  return <CreditCardView {...viewModel} />
}

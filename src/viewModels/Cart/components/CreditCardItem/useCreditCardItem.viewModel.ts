import { format } from 'date-fns'
import { CreditCard } from '../../../../shared/interfaces/credit-card'

export const useCreditCardItemViewModel = (creditCard: CreditCard) => {
  const formattedExpirationDate = format(creditCard.expirationDate, 'MM/yyyy')

  const formattedCardNumber = creditCard.number.slice(-4)

  return {
    creditCard,
    formattedExpirationDate,
    formattedCardNumber,
  }
}

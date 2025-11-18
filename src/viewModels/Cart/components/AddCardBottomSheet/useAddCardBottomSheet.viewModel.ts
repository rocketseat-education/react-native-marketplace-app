import { useCreateCreditCardMutation } from '../../../../shared/queries/credit-cards/use-create-credit-card.mutatio'

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()

  const handleCreateCreditCard = () => {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: '',
      number: '',
    })
  }

  return {
    handleCreateCreditCard,
  }
}

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useCreateCreditCardMutation } from '../../../../shared/queries/credit-cards/use-create-credit-card.mutatio'
import { CreditCardFormData, creditCardSchema } from './credit-card.schema'

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()

  const { control, handleSubmit, reset, watch, clearErrors } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: '',
        number: '',
        CVV: '',
        expirationDate: '',
      },
    })

  const handleCreateCreditCard = () => {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: '',
      number: '',
    })
  }

  return {
    handleCreateCreditCard,
    control,
  }
}

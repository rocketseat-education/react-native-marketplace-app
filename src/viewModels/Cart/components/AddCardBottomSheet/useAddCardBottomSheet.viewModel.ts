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

  const expirationDateMask = (value: string) => {
    const cleaned = value.replace(/\D/g, '')

    if (cleaned.length <= 2) return cleaned

    const month = cleaned.slice(0, 2)
    const year = cleaned.slice(2)

    if (year.length > 0) {
      return `${month}/${year}`
    }

    return month
  }

  const cardNumberMask = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  }

  return {
    handleCreateCreditCard,
    control,
    expirationDateMask,
    cardNumberMask,
  }
}

import { yupResolver } from '@hookform/resolvers/yup'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateCreditCardMutation } from '../../../../shared/queries/credit-cards/use-create-credit-card.mutatio'
import { useBottomSheetStore } from '../../../../shared/store/bottomsheet-store'
import { CreditCardFormData, creditCardSchema } from './credit-card.schema'

export type FocusedField = 'number' | 'name' | 'expiry' | 'cvv'

const formatExpirationDateFormApi = (
  dateString: string,
  setError: (message: string) => void,
) => {
  const [month, year] = dateString.split('/').map(Number)

  if (month < 1 || month > 12) {
    setError('Mês inválido')
    throw new Error('Mês inválido')
  }

  if (year < 0 || year > 99) {
    setError('Ano inválido')
    throw new Error('Ano inválido')
  }

  const fullYear = 2000 + year

  const expirationDate = new Date(fullYear, month, 0)

  const isoDate = expirationDate.toISOString().split('T')[0]

  return isoDate
}

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()
  const [focusedField, setFocusedField] = useState<FocusedField | null>(null)

  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const { control, handleSubmit, reset, watch, clearErrors, setError } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: '',
        number: '',
        CVV: '',
        expirationDate: '',
      },
    })

  const { close: closeBottomSheet } = useBottomSheetStore()

  const handleCreateCreditCard = handleSubmit(
    async ({ number, CVV, expirationDate: rawExpirationDate }) => {
      const expirationDate = formatExpirationDateFormApi(
        rawExpirationDate,
        (message) => setError('expirationDate', { message }),
      )
      const cleanedNumber = number.replace(/\D/g, '')

      await createCreditCardMutation.mutate({
        CVV: Number(CVV),
        expirationDate,
        number: cleanedNumber,
      })

      closeBottomSheet()
    },
  )

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

  const handleFieldFocus = (field: FocusedField) => {
    console.log(field)
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current)
    }

    setFocusedField(field)
  }

  const handleFieldBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setFocusedField(null)
    }, 50)
  }

  const isFlipped = focusedField === 'cvv'

  return {
    handleCreateCreditCard,
    control,
    expirationDateMask,
    cardNumberMask,
    isFlipped,
    handleFieldFocus,
    handleFieldBlur,
    focusedField,
  }
}

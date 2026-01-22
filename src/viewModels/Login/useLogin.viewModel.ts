import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useOneSignal } from '../../shared/hooks/useOneSignal'
import { useLoginMutation } from '../../shared/queries/auth/use-login.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { LoginFormData, loginScheme } from './login.scheme'

export const useLoginViewModel = () => {
  const { user } = useUserStore()

  const { playerId } = useOneSignal()

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    await loginMutation.mutate({
      ...userFormData,
      notificationToken: playerId,
    })
  })

  return {
    control,
    onSubmit,
  }
}

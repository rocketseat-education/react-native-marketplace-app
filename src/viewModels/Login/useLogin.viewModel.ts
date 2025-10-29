import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../shared/queries/auth/use-login.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { LoginFormData, loginScheme } from './login.scheme'

export const useLoginViewModel = () => {
  const { user } = useUserStore()

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutate(userFormData)
  })

  return {
    control,
    onSubmit,
  }
}

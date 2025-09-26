import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { RegisterFormData, registerScheme } from './register.scheme'

export const useRegisterViewModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  })

  const onSubmit = handleSubmit(({}) => {})

  return {
    control,
    errors,
    onSubmit,
  }
}

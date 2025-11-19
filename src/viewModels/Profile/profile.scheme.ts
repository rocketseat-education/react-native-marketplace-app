import * as yup from 'yup'

export const profileScheme: yup.ObjectSchema<{
  name: string
  email: string
  phone: string
  newPassword?: string
  confirmNewPassword?: string
}> = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(4, 'Nome deve ter pelo menos 4 caracteres'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(/^\d{11}$/, 'Telefone deve ter 11 dígitos (DDD + número)'),
  newPassword: yup.string().optional(),
  confirmNewPassword: yup.string().optional(),
})

export type ProfileFormData = yup.InferType<typeof profileScheme>

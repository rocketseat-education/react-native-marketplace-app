import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppModal } from '../../shared/hooks/useAppModal'
import { useUpdateProfileMutation } from '../../shared/queries/profile/use-update-profile.mutation'
import { useCartStore } from '../../shared/store/cart-store'
import { useModalStore } from '../../shared/store/modal-store'
import { useUserStore } from '../../shared/store/user-store'
import { ProfileFormData, profileScheme } from './profile.scheme'

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  )

  const { showSelection } = useAppModal()
  const { close } = useModalStore()
  const { clearCart } = useCartStore()

  const updateProfileMutation = useUpdateProfileMutation()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileScheme),
    defaultValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      password: undefined,
      newPassword: undefined,
    },
  })

  const validatePasswords = (userData: ProfileFormData) => {
    if (!userData.password) return true
    if (
      userData?.password === userData?.newPassword &&
      userData?.password?.length > 0
    ) {
      return false
    }

    return true
  }

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return

    await updateProfileMutation.mutateAsync(userData)
  })

  const handleLogout = () =>
    showSelection({
      title: 'Sair',
      message: 'Tem certeza que deseja sair da sua conta?',
      options: [
        {
          text: 'Continuar logado',
          variant: 'primary',
          onPress: close,
        },
        {
          text: 'Sair',
          variant: 'danger',
          onPress: () => {
            clearCart()
            logout()
          },
        },
      ],
    })

  return { control, onSubmit, avatarUri, isSubmitting, handleLogout }
}

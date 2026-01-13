import { yupResolver } from '@hookform/resolvers/yup'
import { CameraType } from 'expo-image-picker'
import { useForm } from 'react-hook-form'
import { buildImageUrl } from '../../shared/helpers/buildImageUrl'
import { useAppModal } from '../../shared/hooks/useAppModal'
import { useImage } from '../../shared/hooks/useImage'
import { useUploadAvatarMutation } from '../../shared/queries/auth/use-upload-avatar.mutation'
import { useUpdateProfileMutation } from '../../shared/queries/profile/use-update-profile.mutation'
import { useCartStore } from '../../shared/store/cart-store'
import { useModalStore } from '../../shared/store/modal-store'
import { useUserStore } from '../../shared/store/user-store'
import { ProfileFormData, profileScheme } from './profile.scheme'

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore()

  const uploadAvatarMutation = useUploadAvatarMutation()

  const { showSelection } = useAppModal()
  const { close } = useModalStore()
  const { clearCart } = useCartStore()
  const { isLoading, handleSelectImage } = useImage({
    callback: async (url) => {
      if (url) {
        await uploadAvatarMutation.mutateAsync(url)
      }
    },
    cameraType: CameraType.front,
  })

  const updateProfileMutation = useUpdateProfileMutation()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
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
            close()
          },
        },
      ],
    })

  const getAvatarUri = () => {
    if (!user?.avatarUrl) return null
    return buildImageUrl(user.avatarUrl)
  }

  return {
    control,
    onSubmit,
    avatarUri: getAvatarUri(),
    isSubmitting,
    handleLogout,
    handleSelectImage,
    isLoading,
  }
}

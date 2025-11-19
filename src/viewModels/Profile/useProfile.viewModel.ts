import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateProfileMutation } from '../../shared/queries/profile/use-update-profile.mutation'
import { useUserStore } from '../../shared/store/user-store'
import { ProfileFormData, profileScheme } from './profile.scheme'

export const useProfileViewModel = () => {
  const { user } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  )

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
    if (!userData.password) return false
    if (
      userData.password === userData.newPassword &&
      userData.password?.length > 0
    ) {
      return false
    }

    return true
  }

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return

    await updateProfileMutation.mutateAsync(userData)
  })

  return { control, onSubmit, avatarUri, isSubmitting }
}

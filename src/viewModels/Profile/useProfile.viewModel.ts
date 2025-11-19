import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUserStore } from '../../shared/store/user-store'
import { ProfileFormData, profileScheme } from './profile.scheme'

export const useProfileViewModel = () => {
  const { user } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  )
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileScheme),
    defaultValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      newPassword: undefined,
      confirmNewPassword: undefined,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return { control, onSubmit, avatarUri }
}

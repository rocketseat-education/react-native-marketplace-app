import { useMutation } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { uploadAvatar } from '../../services/auth.service'
import { useUserStore } from '../../store/user-store'

export const useUploadAvatarMutation = () => {
  const { updateUser } = useUserStore()
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      updateUser({ avatarUrl: response.url })
    },
    onError: (error) => {
      console.log(error)
      Toast.error('Erro ao fazer upload da foto de perfil')
    },
  })

  return mutation
}

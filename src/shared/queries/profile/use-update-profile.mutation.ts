import { useMutation } from '@tanstack/react-query'
import { Toast } from 'toastify-react-native'
import { useAppModal } from '../../hooks/useAppModal'
import { updateUserProfile } from '../../services/profile.service'
import { useUserStore } from '../../store/user-store'

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore()
  const { showSuccess } = useAppModal()
  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (response) => {
      updateUser({
        ...response.user,
      })
      showSuccess({
        title: 'Sucesso!',
        message: 'Dados cadastrais atualizados com sucesso!',
      })
    },
    onError: (error) => {
      Toast.error(error.message ?? 'Falha ao atualizar os dados do usuário')
    },
  })

  return mutation
}

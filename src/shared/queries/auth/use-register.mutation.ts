import { useMutation } from '@tanstack/react-query'
import { AuthResponse } from '../../interfaces/http/auth-response'
import { RegisterHttpParams } from '../../interfaces/http/register'
import { register } from '../../services/auth.service'
import { useUserStore } from '../../store/user-store'

interface UseRegisterMutationParams {
  onSuccess?: () => void
}

export const useRegisterMutation = ({
  onSuccess,
}: UseRegisterMutationParams = {}) => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => register(userData),
    onSuccess: (response) => {
      setSession({
        refreshToken: response.refreshToken,
        token: response.token,
        user: response.user,
      })
      onSuccess?.()
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return mutation
}

import { useMutation } from '@tanstack/react-query'
import { LoginHttpParams } from '../../interfaces/http/login'
import { login } from '../../services/auth.service'
import { useUserStore } from '../../store/user-store'

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => login(userData),
    onSuccess: (response) => {
      setSession(response)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return mutation
}

import { Redirect, Stack } from 'expo-router'
import { useUserStore } from '../../shared/store/user-store'

export default function PrivateLayout() {
  const { user, token } = useUserStore()

  if (!user || !token) {
    return <Redirect href="/(public)/login" />
  }

  return <Stack />
}

import { Redirect, Stack } from 'expo-router'
import { AppBottomSheet } from '../../shared/components/AppBottomSheet'
import { useUserStore } from '../../shared/store/user-store'

export default function PrivateLayout() {
  const { user, token } = useUserStore()

  if (!user || !token) {
    return <Redirect href="/(public)/login" />
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
      </Stack>
      <AppBottomSheet />
    </>
  )
}

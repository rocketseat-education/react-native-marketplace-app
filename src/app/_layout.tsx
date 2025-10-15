import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import '../styles/global.css'
import ToastManager from 'toastify-react-native'
import { AppModal } from '../shared/components/AppModal'

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(private)" />
      </Stack>
      <AppModal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  )
}

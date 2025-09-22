import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base">Login!!</Text>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}

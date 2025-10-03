import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../../shared/components/AppInput'
import { AuthFormHeader } from '../../shared/components/AuthFormHeader'
import { KeyboardContainer } from '../../shared/components/KeyboardContainer'

export const LoginView = () => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <AuthFormHeader
          subTitle="Informe seu e-mail e senha"
          title="Acesse sua conta"
        />

        <AppInput />

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  )
}

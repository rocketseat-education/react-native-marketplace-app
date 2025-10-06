import { router } from 'expo-router'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppButton } from '../../shared/components/AppButton'
import { AppInputController } from '../../shared/components/AppInputController'
import { AuthFormHeader } from '../../shared/components/AuthFormHeader'
import { KeyboardContainer } from '../../shared/components/KeyboardContainer'
import { useLoginViewModel } from './useLogin.viewModel'

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <AuthFormHeader
          subTitle="Informe seu e-mail e senha"
          title="Acesse sua conta"
        />

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          placeholder="mail@example.com.br"
          name="email"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          control={control}
          name="password"
          label="SENHA"
          placeholder="Sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registro</Text>
        </TouchableOpacity>
        <AppButton />
      </View>
    </KeyboardContainer>
  )
}

import { router } from 'expo-router'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInputController } from '../../shared/components/AppInputController'
import { AuthFormHeader } from '../../shared/components/AuthFormHeader'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View className="flex-1 justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subTitle="Informe seus dados pessoais e de acesso"
      />
      <AppInputController
        leftIcon="mail-outline"
        label="E-MAIL"
        control={control}
        name="email"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

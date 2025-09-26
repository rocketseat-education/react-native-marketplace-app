import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register</Text>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

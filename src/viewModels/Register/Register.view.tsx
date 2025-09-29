import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../../shared/components/AppInput'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  return (
    <View className="flex-1 justify-center">
      <AppInput />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

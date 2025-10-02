import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInputController } from '../../shared/components/AppInputController'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View className="flex-1 justify-center">
      <AppInputController
        leftIcon="mail-outline"
        label="E-MAIL"
        control={control}
        name="email"
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

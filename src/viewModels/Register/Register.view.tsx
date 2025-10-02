import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../../shared/components/AppInput'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <View className="flex-1 justify-center">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            leftIcon="mail-outline"
            label="E-mail"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

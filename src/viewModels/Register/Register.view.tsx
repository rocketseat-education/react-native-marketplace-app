import { FC } from 'react'
import { Text, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  setUserData,
  userData,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{userData.name}</Text>
    </View>
  )
}

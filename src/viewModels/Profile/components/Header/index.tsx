import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useUserStore } from '../../../../shared/store/user-store'
import { colors } from '../../../../styles/colors'

interface HeaderParams {
  onLogout: () => void
}

export const Header: FC<HeaderParams> = ({ onLogout }) => {
  return (
    <View className="flex-row items-center justify-between py-3 border-shape">
      <TouchableOpacity
        className="flex-row items-center gap-1"
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color={colors['purple-base']} />
        <Text className="text-purple-base font-semibold text-base">Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onLogout}
        className="flex-row items-center gap-1"
      >
        <Ionicons name="log-out-outline" size={20} color={colors.danger} />
        <Text className="text-danger text-base">Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

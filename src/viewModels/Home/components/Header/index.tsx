import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { buildImageUrl } from '../../../../shared/helpers/buildImageUrl'
import { useUserStore } from '../../../../shared/store/user-store'
import { colors } from '../../../../styles/colors'

export const HomeHeader = () => {
  const { user } = useUserStore()

  const getAvatarUri = () => {
    if (!user?.avatarUrl) return null
    return buildImageUrl(user.avatarUrl)
  }

  const avatarUri = getAvatarUri()

  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push('/(private)/profile')}
        className="flex-row items-center gap-6"
      >
        <View className="relative">
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className="size-[56px] rounded-xl border-shape"
            />
          ) : (
            <View className="size-[56px] rounded-xl bg-shape border-2 items-center justify-center border-gray-200">
              <Ionicons name="person" size={24} color={colors.gray[300]} />
            </View>
          )}
        </View>

        <View>
          <Text className="font-bold text-base">
            Olá, {user?.name.split(' ')[0] || 'Usuário'}
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold">Ver perfil</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color={colors['purple-base']}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

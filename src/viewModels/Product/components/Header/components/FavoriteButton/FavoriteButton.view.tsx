import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { colors } from '../../../../../../styles/colors'
import { useFavoriteButtonViewModel } from './useFavoriteButton.viewModel'

export const FavoriteButtonView: FC<
  ReturnType<typeof useFavoriteButtonViewModel>
> = ({ isFavorite, handleToggleFavorite, loading }) => {
  if (loading) {
    return <ActivityIndicator size={29} color={colors['purple-base']} />
  }
  return (
    <TouchableOpacity onPress={handleToggleFavorite}>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={28}
        color={colors['danger']}
      />
    </TouchableOpacity>
  )
}

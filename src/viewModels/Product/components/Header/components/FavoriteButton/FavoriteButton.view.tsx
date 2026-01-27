import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { colors } from '../../../../../../styles/colors'
import { useFavoriteButtonViewModel } from './useFavoriteButton.viewModel'

export const FavoriteButtonView: FC<
  ReturnType<typeof useFavoriteButtonViewModel>
> = ({ isFavorite }) => {
  return (
    <TouchableOpacity>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={28}
        color={colors['danger']}
      />
    </TouchableOpacity>
  )
}

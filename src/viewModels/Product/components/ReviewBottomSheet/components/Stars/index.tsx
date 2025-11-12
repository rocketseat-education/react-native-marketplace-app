import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { colors } from '../../../../../../styles/colors'

interface StarsParams {
  rating: number
  onChangeRating: (rating: number) => void
}

export const Stars: FC<StarsParams> = ({ rating, onChangeRating }) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1
    const isSelected = starNumber <= rating
    return (
      <TouchableOpacity
        key={`rating-star-${starNumber}`}
        onPress={() => onChangeRating(starNumber)}
      >
        <Ionicons
          name={isSelected ? 'star' : 'star-outline'}
          size={32}
          color={isSelected ? colors['purple-base'] : colors.gray[200]}
        />
      </TouchableOpacity>
    )
  })
}

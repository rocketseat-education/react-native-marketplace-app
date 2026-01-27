import { FC } from 'react'
import { FavoriteButtonView } from './FavoriteButton.view'
import { useFavoriteButtonViewModel } from './useFavoriteButton.viewModel'

interface FavoriteButtonProps {
  productId: number
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ productId }) => {
  const viewModel = useFavoriteButtonViewModel(productId)

  return <FavoriteButtonView {...viewModel} />
}

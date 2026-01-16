import { useLocalSearchParams } from 'expo-router'
import { ProductView } from '../../../viewModels/Product/Product.view'
import { useProductViewModel } from '../../../viewModels/Product/useProduct.viewModel'

export default function Product() {
  const { id, openFeedbackBottomSheet } = useLocalSearchParams<{
    id: string
    openFeedbackBottomSheet?: string
  }>()
  const viewModel = useProductViewModel(Number(id), !!openFeedbackBottomSheet)
  return <ProductView {...viewModel} />
}

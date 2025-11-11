import { useLocalSearchParams } from 'expo-router'
import { ProductView } from '../../../viewModels/Product/Product.view'
import { useProductViewModel } from '../../../viewModels/Product/useProduct.viewModel'

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const viewModel = useProductViewModel(Number(id))
  return <ProductView {...viewModel} />
}

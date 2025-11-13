import { AddCardBottomSheetView } from './AddCardBottomSheet.view'
import { useAddCardBottomSheetViewModel } from './useAddCardBottomSheet.viewModel'

export const AddCardBottomSheet = () => {
  const viewModel = useAddCardBottomSheetViewModel()

  return <AddCardBottomSheetView {...viewModel} />
}

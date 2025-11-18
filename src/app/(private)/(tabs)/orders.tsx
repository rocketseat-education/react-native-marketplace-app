import { OrdersView } from '../../../viewModels/Orders/Orders.view'
import { useOrdersViewModel } from '../../../viewModels/Orders/useOrders.viewModel'

export default function Orders() {
  const viewModel = useOrdersViewModel()
  return <OrdersView {...viewModel} />
}

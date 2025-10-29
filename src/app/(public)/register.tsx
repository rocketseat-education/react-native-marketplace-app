import { RegisterView } from '../../viewModels/Register/Register.view'
import { useRegisterViewModel } from '../../viewModels/Register/useRegister.viewModel'

export default function Register() {
  const props = useRegisterViewModel()

  return <RegisterView {...props} />
}

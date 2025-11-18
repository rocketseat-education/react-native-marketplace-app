import { Ionicons } from '@expo/vector-icons'
import { createElement } from 'react'
import {
  SelectionModal,
  SelectionModalProps,
} from '../components/Modals/SelectionModal'
import {
  SuccessModal,
  SuccessModalParams,
} from '../components/Modals/SuccessMode'
import { useModalStore } from '../store/modal-store'

export type SelectionVariant = 'primary' | 'secondary' | 'danger'

export interface SelectionOption {
  text: string
  onPress: () => void
  icon?: keyof typeof Ionicons.glyphMap
  variant?: SelectionVariant
}

export const useAppModal = () => {
  const { open, close } = useModalStore()

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string
    message?: string
    options: SelectionOption[]
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps),
    )
  }

  const showSuccess = (config: SuccessModalParams) => {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
          if (config.onButtonPress) {
            config.onButtonPress()
          }
          close()
        },
      }),
    )
  }
  return { showSelection, showSuccess }
}

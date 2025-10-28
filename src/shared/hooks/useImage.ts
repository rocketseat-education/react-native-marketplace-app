import { ImagePickerOptions } from 'expo-image-picker'
import { useModalStore } from '../store/modal-store'
import { useAppModal } from './useAppModal'
import { useCamera } from './useCamera'
import { useGallery } from './useGallery'

interface UseImageParams extends ImagePickerOptions {
  callback: (uri: string) => void
}

export const useImage = ({ callback, ...pickerOptions }: UseImageParams) => {
  const { openCamera, isLoading: isCameraLoading } = useCamera(pickerOptions)
  const { openGallery, isLoading: isGalleryLoading } = useGallery(pickerOptions)

  const isLoading = isCameraLoading || isGalleryLoading

  const { close } = useModalStore()

  const modals = useAppModal()

  const handleCallback = (uri: string | null) => {
    close()
    callback(uri)
  }

  const handleSelectImage = () => {
    modals.showSelection({
      title: 'Selecionar foto',
      message: 'Escolha uma opção:',
      options: [
        {
          text: 'Galeria',
          icon: 'images',
          variant: 'primary',
          onPress: async () => {
            const imageUri = await openGallery()
            handleCallback(imageUri)
          },
        },
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: async () => {
            const imageUri = await openCamera()
            handleCallback(imageUri)
          },
        },
      ],
    })
  }
  return {
    handleSelectImage,
    isLoading,
  }
}

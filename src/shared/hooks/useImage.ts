import { ImagePickerOptions } from 'expo-image-picker'
import { useAppModal } from './useAppModal'
import { useCamera } from './useCamera'
import { useGallery } from './useGallery'

export const useImage = (pickerOptions: ImagePickerOptions = {}) => {
  const { openCamera, isLoading: isCameraLoading } = useCamera(pickerOptions)
  const { openGallery, isLoading: isGalleryLoading } = useGallery(pickerOptions)

  const isLoading = isCameraLoading || isGalleryLoading

  const modals = useAppModal()

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
            console.log(imageUri)
          },
        },
        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: openCamera,
        },
      ],
    })
  }
  return {
    handleSelectImage,
    isLoading,
  }
}

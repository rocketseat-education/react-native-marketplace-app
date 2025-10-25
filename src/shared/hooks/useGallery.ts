import * as ImagePicker from 'expo-image-picker'
import { ImagePickerOptions } from 'expo-image-picker'
import { useCallback, useState } from 'react'
import { Toast } from 'toastify-react-native'

export const useGallery = (pickerOptions: ImagePickerOptions) => {
  const [loading, setLoading] = useState(false)

  const requestGalleryPermission = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      const currentStatus = status === 'granted'

      if (!currentStatus) {
        Toast.error('Precisamos da permissão para acessar suas fotos', 'top')
      }

      return currentStatus
    } catch {
      Toast.error('Erro ao solicitar permissões da galeria', 'top')
      return false
    }
  }, [])

  const openGallery = useCallback(async (): Promise<string | null> => {
    setLoading(true)
    try {
      const hasPermission = await requestGalleryPermission()
      if (!hasPermission) return null

      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Foto selecionada com sucesso', 'top')
        return result.assets[0].uri
      }

      return null
    } catch {
      Toast.error('Erro ao selecionar a foto', 'top')
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { openGallery, loading }
}

import { Ionicons } from '@expo/vector-icons'
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { appInputVariants } from './input.variants'

export const AppInput = () => {
  const styles = appInputVariants()

  return (
    <View>
      <Pressable>
        <Ionicons name="person" />

        <TextInput />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}

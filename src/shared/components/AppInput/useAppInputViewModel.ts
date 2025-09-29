import { useRef, useState } from 'react'
import { BlurEvent, FocusEvent, TextInput } from 'react-native'
import { colors } from '../../../styles/colors'

interface AppInputViewModelProps {
  isError?: boolean
  isDisabled?: boolean
  error?: string
  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: BlurEvent) => void
  mask?: (text: string) => string | void
  onChangeText?: (text: string) => string | void
  value?: string
}

export const useAppInputViewModel = ({
  isError,
  isDisabled,
  error,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handlePasswordToggle = () => {
    setShowPassword((prevValue) => !prevValue)
  }

  const handleWrapperPress = () => {
    inputRef.current?.focus()
  }

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const getIconColor = () => {
    if (isFocused) return colors['purple-base']
    if (isError) return colors.danger
    if (value) return colors['purple-base']
    return colors.gray[200]
  }

  return {
    getIconColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
  }
}

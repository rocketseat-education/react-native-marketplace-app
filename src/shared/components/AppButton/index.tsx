import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap
  children: string
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  children,
  ...rest
}) => {
  const styles = buttonVariants()
  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text className={styles.text()}>{children}</Text>
    </TouchableOpacity>
  )
}

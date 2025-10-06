import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { colors } from '../../../styles/colors'
import { ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  children: string
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  variant = 'filled',
  isLoading,
  isDisabled,
  ...rest
}) => {
  const contentColor =
    variant === 'filled' ? colors.white : colors['purple-base']

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
    variant,
  })

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={contentColor} />
    }

    return (
      <>
        {leftIcon && <Ionicons name={leftIcon} color={contentColor} />}
        <Text className={styles.text()}>{children}</Text>
        {rightIcon && (
          <Ionicons name={rightIcon} color={contentColor} size={20} />
        )}
      </>
    )
  }

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  )
}

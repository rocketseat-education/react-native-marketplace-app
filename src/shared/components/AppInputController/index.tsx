import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'
import { AppInput, AppInputProps } from '../AppInput'

interface AppInputControllerProps<T extends FieldValues>
  extends Omit<AppInputProps, 'value' | 'onChangeText' | 'error'> {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}

export const AppInputController = <T extends FieldValues>({
  name,
  control,
  errors,
  ...rest
}: AppInputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          error={error?.message}
          isDisabled={isSubmitting || rest.isDisabled}
          {...rest}
        />
      )}
    />
  )
}

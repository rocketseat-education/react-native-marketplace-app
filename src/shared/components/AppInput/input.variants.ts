import { tv, type VariantProps } from 'tailwind-variants'

export const appInputVariants = tv({
  slots: {
    container: 'w-full my-4',
    wrapper: 'flex-row items-center border-b border-gray-200 pb-2',
    input: 'bg-transparent text-gray-500 text-base flex-1',
    label: 'text-xs text-gray-300 mb-3 font-semibold',
    error: 'text-sm text-danger mt-1',
  },
  variants: {
    isFocused: {
      true: {
        wrapper: 'border-purple-base',
        label: 'text-purple-base',
      },
    },
    isError: {
      true: {
        wrapper: 'border-danger',
        label: 'text-danger',
      },
    },
    isDisabled: {
      true: {
        wrapper: 'opacity-50',
        input: 'text-gray-300',
      },
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
})

export type AppInputVariantsProps = VariantProps<typeof appInputVariants>

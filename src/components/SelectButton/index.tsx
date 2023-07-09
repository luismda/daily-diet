import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { clsx } from 'clsx'

import { Text } from '@components/Text'

interface SelectButtonProps extends TouchableOpacityProps {
  text: string
  variant: 'success' | 'danger'
  isSelected?: boolean
}

export function SelectButton({
  text,
  variant,
  isSelected = false,
  className,
  ...rest
}: SelectButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityState={{ selected: isSelected }}
      className={clsx(
        'flex-row items-center justify-center space-x-2 rounded-md border border-transparent bg-gray-200 p-4',
        {
          'border-green-500 bg-green-100': isSelected && variant === 'success',
          'border-red-500 bg-red-100': isSelected && variant === 'danger',
        },
        className,
      )}
      {...rest}
    >
      <View
        className={clsx('h-2 w-2 rounded-full', {
          'bg-green-500': variant === 'success',
          'bg-red-500': variant === 'danger',
        })}
      />

      <Text weight="bold" size="sm" className="text-gray-900">
        {text}
      </Text>
    </TouchableOpacity>
  )
}

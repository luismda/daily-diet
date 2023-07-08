import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { clsx } from 'clsx'

interface ButtonRootProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary'
}

export function ButtonRoot({ variant = 'primary', ...rest }: ButtonRootProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={clsx(
        'flex-row items-center justify-center space-x-3 rounded-md border px-6 py-4',
        {
          'border-transparent bg-gray-800': variant === 'primary',
          'border-gray-900 bg-transparent': variant === 'secondary',
        },
      )}
      {...rest}
    />
  )
}

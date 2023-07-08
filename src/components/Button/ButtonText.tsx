import { clsx } from 'clsx'

import { Text, TextProps } from '@components/Text'

interface ButtonTextProps extends TextProps {
  variant?: 'primary' | 'secondary'
}

export function ButtonText({ variant = 'primary', ...rest }: ButtonTextProps) {
  return (
    <Text
      weight="bold"
      size="sm"
      className={clsx('text-white', {
        'text-gray-900': variant === 'secondary',
      })}
      {...rest}
    />
  )
}

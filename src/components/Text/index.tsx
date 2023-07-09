import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'
import { clsx } from 'clsx'

export interface TextProps extends NativeTextProps {
  weight?: 'regular' | 'bold'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

export function Text({
  weight = 'regular',
  size = 'md',
  className,
  ...rest
}: TextProps) {
  return (
    <NativeText
      className={clsx(
        'leading-tight text-gray-800',
        {
          'font-title': weight === 'bold',
          'font-body': weight === 'regular',
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
        },
        className,
      )}
      {...rest}
    />
  )
}

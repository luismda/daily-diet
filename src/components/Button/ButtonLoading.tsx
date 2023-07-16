import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import { styled } from 'nativewind'
import { clsx } from 'clsx'

const StyledActivityIndicator = styled(ActivityIndicator, {
  classProps: ['color'],
})

interface ButtonLoadingProps extends ActivityIndicatorProps {
  variant?: 'primary' | 'secondary'
}

export function ButtonLoading({
  variant = 'primary',
  ...rest
}: ButtonLoadingProps) {
  return (
    <StyledActivityIndicator
      color={clsx('text-white', {
        'text-gray-900': variant === 'secondary',
      })}
      {...rest}
    />
  )
}

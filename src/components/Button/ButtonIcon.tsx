import { ElementType } from 'react'
import { IconProps } from 'phosphor-react-native'
import { styled } from 'nativewind'
import { clsx } from 'clsx'

interface ButtonIconProps {
  icon: ElementType<IconProps>
  variant?: 'primary' | 'secondary'
}

export function ButtonIcon({
  icon: Icon,
  variant = 'primary',
}: ButtonIconProps) {
  const StyledIcon = styled(Icon, { classProps: ['color'] })

  return (
    <StyledIcon
      color={clsx('text-white', {
        'text-gray-900': variant === 'secondary',
      })}
      size={18}
    />
  )
}

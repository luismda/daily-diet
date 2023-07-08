import { ElementType } from 'react'
import { IconProps } from 'phosphor-react-native'
import { styled } from 'nativewind'

interface ButtonIconIconProps extends IconProps {
  icon: ElementType<IconProps>
}

export function ButtonIconIcon({ icon: Icon, ...rest }: ButtonIconIconProps) {
  const StyledIcon = styled(Icon, { classProps: ['color'] })

  return <StyledIcon size={24} color="text-gray-800" {...rest} />
}

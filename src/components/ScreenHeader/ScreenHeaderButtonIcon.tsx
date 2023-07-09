import { ElementType } from 'react'
import { IconProps } from 'phosphor-react-native'

import { ButtonIcon } from '@components/ButtonIcon'
import { ButtonIconRootProps } from '@components/ButtonIcon/ButtonIconRoot'

interface ScreenHeaderButtonIconProps extends ButtonIconRootProps {
  icon: ElementType<IconProps>
}

export function ScreenHeaderButtonIcon({
  icon: Icon,
  ...rest
}: ScreenHeaderButtonIconProps) {
  return (
    <ButtonIcon.Root className="absolute z-[1]" {...rest}>
      <ButtonIcon.Icon icon={Icon} color="text-gray-800" />
    </ButtonIcon.Root>
  )
}

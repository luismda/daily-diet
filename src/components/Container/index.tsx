import { View, ViewProps } from 'react-native'
import { clsx } from 'clsx'

interface ContainerProps extends ViewProps {}

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <View
      className={clsx(
        '-mt-5 flex-1 rounded-t-[20px] bg-gray-100 px-6 pb-6 pt-10',
        className,
      )}
      {...rest}
    />
  )
}

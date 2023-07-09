import { View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { clsx } from 'clsx'

interface ScreenHeaderRootProps extends ViewProps {
  variant?: 'success' | 'danger' | 'default'
}

export function ScreenHeaderRoot({
  variant,
  children,
  ...rest
}: ScreenHeaderRootProps) {
  return (
    <SafeAreaView
      className={clsx('h-[132px] items-center bg-gray-300 px-6 pt-7', {
        'bg-green-100': variant === 'success',
        'bg-red-100': variant === 'danger',
      })}
      {...rest}
    >
      <View className="flex-row items-center">{children}</View>
    </SafeAreaView>
  )
}

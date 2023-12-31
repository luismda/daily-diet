import { View, ViewProps } from 'react-native'
import { clsx } from 'clsx'

import { Text } from '@components/Text'

interface MetricCardProps extends ViewProps {
  metric: number
  description: string
  variant?: 'success' | 'danger' | 'default'
}

export function MetricCard({
  metric,
  description,
  variant = 'default',
  className,
  ...rest
}: MetricCardProps) {
  return (
    <View
      className={clsx(
        'items-center space-y-2 rounded-lg bg-gray-200 p-4',
        {
          'bg-green-100': variant === 'success',
          'bg-red-100': variant === 'danger',
        },
        className,
      )}
      {...rest}
    >
      <Text weight="bold" size="2xl" className="text-gray-900">
        {metric}
      </Text>

      <Text size="sm" className="text-center">
        {description}
      </Text>
    </View>
  )
}

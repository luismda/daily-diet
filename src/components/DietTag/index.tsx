import { View, ViewProps } from 'react-native'
import { clsx } from 'clsx'

import { Text } from '@components/Text'

interface DietTagProps extends ViewProps {
  isInsideDiet?: boolean
}

export function DietTag({
  isInsideDiet = true,
  className,
  ...rest
}: DietTagProps) {
  return (
    <View
      className={clsx(
        'flex-row items-center space-x-2 rounded-full bg-gray-200 px-4 py-2',
        className,
      )}
      {...rest}
    >
      <View
        accessible
        accessibilityLabel={`Bolinha ${
          isInsideDiet ? 'verde' : 'vermelha'
        } indicando que a refeição ${
          isInsideDiet ? 'está' : 'não está'
        } na dieta.`}
        className={clsx('h-2 w-2 rounded-full', {
          'bg-green-500': isInsideDiet,
          'bg-red-500': !isInsideDiet,
        })}
      />

      <Text size="sm" className="text-gray-900">
        {isInsideDiet ? 'dentro' : 'fora'} da dieta
      </Text>
    </View>
  )
}

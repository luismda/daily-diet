import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { clsx } from 'clsx'

import { Text } from '@components/Text'

interface MealCardProps extends TouchableOpacityProps {
  name: string
  time: string
  isInsideDiet: boolean
}

export function MealCard({ name, time, isInsideDiet, ...rest }: MealCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center space-x-3 rounded-md border border-gray-300 py-[14px] pl-3 pr-4"
      {...rest}
    >
      <View className="flex-1 flex-row items-center space-x-3 divide-x-[1px] divide-gray-400">
        <Text weight="bold" size="sm" className="text-gray-900">
          {time}
        </Text>

        <Text className="pl-3">{name}</Text>
      </View>

      <View
        className={clsx('h-[14px] w-[14px] rounded-full', {
          'bg-green-300': isInsideDiet,
          'bg-red-300': !isInsideDiet,
        })}
      />
    </TouchableOpacity>
  )
}

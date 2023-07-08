import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'
import { clsx } from 'clsx'
import { styled } from 'nativewind'

import { numberFormat } from '@utils/numberFormat'

import { Text } from '@components/Text'

const ArrowUpRightIcon = styled(ArrowUpRight, { classProps: ['color'] })

interface SummaryDietCardButtonProps extends TouchableOpacityProps {
  decimalPercentage: number
}

export function SummaryDietCardButton({
  decimalPercentage,
  ...rest
}: SummaryDietCardButtonProps) {
  const hasMoreThanHalfOfMealsInDiet = decimalPercentage >= 0.5
  const percentageFormatted = numberFormat.format(decimalPercentage * 100)

  return (
    <TouchableOpacity
      accessibilityLabel="Visualizar suas métricas na dieta"
      accessibilityHint="Tela de métricas com estatísticas completas sobre sua dieta"
      activeOpacity={0.7}
      className={clsx(
        'relative items-center justify-center gap-[2px] rounded-lg px-4 py-5',
        {
          'bg-green-100': hasMoreThanHalfOfMealsInDiet,
          'bg-red-100': !hasMoreThanHalfOfMealsInDiet,
        },
      )}
      {...rest}
    >
      <ArrowUpRightIcon
        className="absolute right-2 top-2"
        color={clsx({
          'text-green-500': hasMoreThanHalfOfMealsInDiet,
          'text-red-500': !hasMoreThanHalfOfMealsInDiet,
        })}
        size={24}
      />

      <Text weight="bold" size="2xl" className="text-gray-900">
        {percentageFormatted}%
      </Text>

      <Text size="sm">das refeições dentro da dieta</Text>
    </TouchableOpacity>
  )
}

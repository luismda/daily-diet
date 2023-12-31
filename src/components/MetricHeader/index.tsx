import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { clsx } from 'clsx'

import { numberFormat } from '@utils/numberFormat'

import { Text } from '@components/Text'
import { ButtonIcon } from '@components/ButtonIcon'

interface MetricHeaderProps {
  decimalPercentage: number
}

export function MetricHeader({ decimalPercentage }: MetricHeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  const hasMoreThanHalfOfMealsInDiet = decimalPercentage >= 0.5
  const percentageFormatted = numberFormat.format(decimalPercentage * 100)

  return (
    <SafeAreaView
      className={clsx('h-[200px] items-center px-6 pt-11', {
        'bg-green-100': hasMoreThanHalfOfMealsInDiet,
        'bg-red-100': !hasMoreThanHalfOfMealsInDiet,
      })}
    >
      <ButtonIcon.Root
        accessibilityLabel="Voltar para tela anterior"
        accessibilityHint="Tela inicial com a sua lista de refeições cadastradas"
        className="absolute left-6 top-16"
        onPress={handleGoBack}
      >
        <ButtonIcon.Icon
          icon={ArrowLeft}
          color={clsx({
            'text-green-500': hasMoreThanHalfOfMealsInDiet,
            'text-red-500': !hasMoreThanHalfOfMealsInDiet,
          })}
        />
      </ButtonIcon.Root>

      <Text weight="bold" size="3xl" className="text-gray-900">
        {percentageFormatted}%
      </Text>

      <Text size="sm">das refeições dentro da dieta</Text>
    </SafeAreaView>
  )
}

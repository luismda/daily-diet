import { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowUpRight } from 'phosphor-react-native'
import { styled } from 'nativewind'
import { clsx } from 'clsx'

import { numberFormat } from '@utils/numberFormat'

import { getDietMealsPercentage } from '@storage/meal/getDietMealsPercentage'

import { Text } from '@components/Text'

const StyledArrowUpRight = styled(ArrowUpRight, { classProps: ['color'] })

const StyledActivityIndicator = styled(ActivityIndicator, {
  classProps: ['color'],
})

export function SummaryDietCardButton() {
  const [dietMealsPercentage, setDietMealsPercentage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  function handleNavigateToMetrics() {
    navigation.navigate('metrics')
  }

  async function fetchDietMealsPercentage() {
    setIsLoading(true)

    try {
      const dietMealsPercentage = await getDietMealsPercentage()

      setDietMealsPercentage(dietMealsPercentage)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDietMealsPercentage()
  }, [])

  const hasMoreThanHalfOfMealsInDiet = dietMealsPercentage >= 0.5
  const percentageFormatted = numberFormat.format(dietMealsPercentage * 100)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityLabel="Visualizar suas métricas na dieta"
      accessibilityHint="Tela de métricas com estatísticas completas sobre sua dieta"
      className={clsx(
        'relative items-center justify-center gap-[2px] rounded-lg px-4 py-5',
        {
          'bg-green-100': hasMoreThanHalfOfMealsInDiet,
          'bg-red-100': !hasMoreThanHalfOfMealsInDiet,
        },
      )}
      onPress={handleNavigateToMetrics}
    >
      {isLoading ? (
        <StyledActivityIndicator
          className="py-5"
          color={clsx({
            'text-green-500': hasMoreThanHalfOfMealsInDiet,
            'text-red-500': !hasMoreThanHalfOfMealsInDiet,
          })}
        />
      ) : (
        <>
          <StyledArrowUpRight
            className="absolute right-2 top-2"
            color={clsx({
              'text-green-500': hasMoreThanHalfOfMealsInDiet,
              'text-red-500': !hasMoreThanHalfOfMealsInDiet,
            })}
            size={24}
          />

          <Text weight="bold" size="3xl" className="text-gray-900">
            {percentageFormatted}%
          </Text>

          <Text size="sm">das refeições dentro da dieta</Text>
        </>
      )}
    </TouchableOpacity>
  )
}

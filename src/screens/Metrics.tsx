import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { MetricsOfMealsStorageDTO } from '@storage/meal/types/MealStorageDTO'

import { Text } from '@components/Text'
import { Loading } from '@components/Loading'
import { Container } from '@components/Container'
import { MetricCard } from '@components/MetricCard'
import { MetricHeader } from '@components/MetricHeader'
import { getMetricsOfMeals } from '@storage/meal/getMetricsOfMeals'

export function Metrics() {
  const [metricsOfMeals, setMetricsOfMeals] =
    useState<MetricsOfMealsStorageDTO | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  async function fetchMetricsOfMeals() {
    setIsLoading(true)

    try {
      const metrics = await getMetricsOfMeals()

      setMetricsOfMeals(metrics)
    } catch (error) {
      Alert.alert(
        'Métricas',
        'Ocorreu um erro ao buscar as métricas das suas refeições. Tente novamente.',
      )

      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMetricsOfMeals()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1">
      <MetricHeader
        decimalPercentage={metricsOfMeals?.dietMealsPercentage ?? 0}
      />

      <Container className="pt-8">
        <Text weight="bold" size="sm" className="text-center text-gray-900">
          Estatísticas gerais
        </Text>

        <View className="mt-6 space-y-3">
          <MetricCard
            metric={metricsOfMeals?.bestSequenceMealsInDiet ?? 0}
            description="melhor sequência de pratos dentro da dieta"
          />

          <MetricCard
            metric={metricsOfMeals?.totalMeals ?? 0}
            description="refeições registradas"
          />

          <View className="flex-row space-x-3">
            <MetricCard
              metric={metricsOfMeals?.totalMealsInDiet ?? 0}
              description="refeições dentro da dieta"
              variant="success"
              className="flex-1"
            />

            <MetricCard
              metric={metricsOfMeals?.totalMealsOffDiet ?? 0}
              description="refeições fora da dieta"
              variant="danger"
              className="flex-1"
            />
          </View>
        </View>
      </Container>
    </View>
  )
}

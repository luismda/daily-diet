import { View } from 'react-native'

import { Text } from '@components/Text'
import { Container } from '@components/Container'
import { MetricCard } from '@components/MetricCard'
import { MetricHeader } from '@components/MetricHeader'

export function Metrics() {
  return (
    <View className="flex-1">
      <MetricHeader decimalPercentage={0.986} />

      <Container className="pt-8">
        <Text weight="bold" size="sm" className="text-center text-gray-900">
          Estatísticas gerais
        </Text>

        <View className="mt-6 space-y-3">
          <MetricCard
            metric={4}
            description="melhor sequência de pratos dentro da dieta"
          />

          <MetricCard metric={109} description="refeições registradas" />

          <View className="flex-row space-x-3">
            <MetricCard
              metric={32}
              description="refeições dentro da dieta"
              variant="success"
              className="flex-1"
            />

            <MetricCard
              metric={77}
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

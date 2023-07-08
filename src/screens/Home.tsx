import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Plus } from 'phosphor-react-native'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { MainHeader } from '@components/MainHeader'
import { SummaryDietCardButton } from '@components/SummaryDietCardButton'

export function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-6">
      <MainHeader />

      <SummaryDietCardButton decimalPercentage={0.623} />

      <View className="mt-10 flex-1">
        <Text className="text-gray-900">Refeições</Text>

        <Button.Root
          accessibilityLabel="Cadastrar uma nova refeição"
          accessibilityHint="Tela com um fomulário para cadastrar uma nova refeição"
          className="mt-2"
        >
          <Button.Icon icon={Plus} />

          <Button.Text>Nova refeição</Button.Text>
        </Button.Root>

        <View className="mt-8 flex-1">
          <ScrollView
            className="space-y-8"
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Text weight="bold" size="lg" className="text-gray-900">
                12.08.22
              </Text>

              <View className="mt-2 space-y-2">
                <MealCard name="X-tudo" time="20:00" isInsideDiet={false} />

                <MealCard
                  name="Whey protein com leite"
                  time="16:00"
                  isInsideDiet
                />

                <MealCard
                  name="Salada cesar com frango..."
                  time="12:30"
                  isInsideDiet
                />

                <MealCard
                  name="Vitamina de banana com..."
                  time="09:30"
                  isInsideDiet
                />
              </View>
            </View>

            <View>
              <Text weight="bold" size="lg" className="text-gray-900">
                11.08.22
              </Text>

              <View className="mt-2 space-y-2">
                <MealCard name="X-tudo" time="20:00" isInsideDiet={false} />

                <MealCard
                  name="Whey protein com leite"
                  time="16:00"
                  isInsideDiet
                />

                <MealCard
                  name="Salada cesar com frango..."
                  time="12:30"
                  isInsideDiet
                />

                <MealCard
                  name="Vitamina de banana com..."
                  time="09:30"
                  isInsideDiet
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

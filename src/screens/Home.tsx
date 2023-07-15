import { useState, useCallback } from 'react'
import { Alert, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Plus } from 'phosphor-react-native'

import { GroupedMealsStorageDTO } from '@storage/meal/MealStorageDTO'

import { listAllMeals } from '@storage/meal/listAllMeals'
import { groupMealsBySameDay } from '@utils/groupMealsBySameDay'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { MealList } from '@components/MealList'
import { MainHeader } from '@components/MainHeader'
import { SummaryDietCardButton } from '@components/SummaryDietCardButton'

export function Home() {
  const [meals, setMeals] = useState<GroupedMealsStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  function handleNavigateToNewMeal() {
    navigation.navigate('new')
  }

  function handleNavigateToMealDetails(mealId: string) {
    navigation.navigate('details', { mealId })
  }

  async function fetchMeals() {
    setIsLoading(true)

    try {
      const storedMeals = await listAllMeals()
      const groupedMealsBySameDay = groupMealsBySameDay(storedMeals)

      setMeals(groupedMealsBySameDay)
    } catch (error) {
      Alert.alert(
        'Refeições',
        'Ocorreu um erro ao buscar suas refeições. Tente novamente.',
      )

      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-6">
      <MainHeader />

      <SummaryDietCardButton />

      <View className="mt-10 flex-1">
        <Text className="text-gray-900">Refeições</Text>

        <Button.Root
          accessibilityLabel="Cadastrar uma nova refeição"
          accessibilityHint="Tela com um fomulário para cadastrar uma nova refeição"
          className="mb-8 mt-2"
          onPress={handleNavigateToNewMeal}
        >
          <Button.Icon icon={Plus} />

          <Button.Text>Nova refeição</Button.Text>
        </Button.Root>

        {isLoading ? (
          <Loading />
        ) : (
          <MealList
            meals={meals}
            onSelectedMeal={handleNavigateToMealDetails}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

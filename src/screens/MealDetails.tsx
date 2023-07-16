import { useState, useCallback } from 'react'
import { Alert, View } from 'react-native'
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native'
import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'
import dayjs from 'dayjs'

import { AppError } from '@utils/AppError'

import { findMealById } from '@storage/meal/findMealById'
import { deleteMealById } from '@storage/meal/deleteMealById'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { DietTag } from '@components/DietTag'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'

type RouteParams = {
  mealId: string
}

export function MealDetails() {
  const [meal, setMeal] = useState<MealStorageDTO | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const route = useRoute()
  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleNavigateToEditMeal() {
    navigation.navigate('edit', { mealId })
  }

  async function deleteMeal() {
    try {
      await deleteMealById(mealId)

      navigation.navigate('home')
    } catch (error) {
      Alert.alert(
        'Excluir refeição',
        'Ocorreu um erro ao excluir sua refeição. Tente novamente.',
      )

      console.log(error)
    }
  }

  function handleDeleteMeal() {
    Alert.alert(
      'Excluir refeição',
      'Deseja realmente excluir o registro da refeição?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim, excluir',
          onPress: () => deleteMeal(),
        },
      ],
    )
  }

  const fetchMeal = useCallback(async () => {
    setIsLoading(true)

    try {
      const meal = await findMealById(mealId)

      setMeal(meal)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
        return
      }

      Alert.alert(
        'Refeição',
        'Ocorreu um erro ao buscar os dados da sua refeição. Tente novamente.',
      )

      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [mealId])

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
    }, [fetchMeal]),
  )

  if (isLoading) {
    return <Loading />
  }

  const mealDateFormatted = dayjs(meal?.realizedAt).format(
    'DD/MM/YYYY [às] HH:mm',
  )

  return (
    <View className="flex-1">
      <ScreenHeader.Root variant={meal?.isInsideDiet ? 'success' : 'danger'}>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela anterior"
          accessibilityHint="Tela inicial com a sua lista de refeições cadastradas"
          icon={ArrowLeft}
          onPress={handleGoBack}
        />

        <ScreenHeader.Title>Refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <View className="flex-1">
          <View>
            <Text weight="bold" size="xl" className="text-gray-900">
              {meal?.name}
            </Text>

            <Text className="mt-2">{meal?.description}</Text>
          </View>

          <View className="mt-6">
            <Text weight="bold" size="sm" className="text-gray-900">
              Data e hora
            </Text>

            <Text className="mt-2">{mealDateFormatted}</Text>
          </View>

          <DietTag
            isInsideDiet={meal?.isInsideDiet}
            className="mt-6 self-start"
          />
        </View>

        <Button.Root
          accessibilityHint="Tela para editar os dados desta refeição"
          onPress={handleNavigateToEditMeal}
        >
          <Button.Icon icon={PencilSimpleLine} />

          <Button.Text>Editar refeição</Button.Text>
        </Button.Root>

        <Button.Root
          variant="secondary"
          className="mt-2"
          onPress={handleDeleteMeal}
        >
          <Button.Icon variant="secondary" icon={Trash} />

          <Button.Text variant="secondary">Excluir refeição</Button.Text>
        </Button.Root>
      </Container>
    </View>
  )
}

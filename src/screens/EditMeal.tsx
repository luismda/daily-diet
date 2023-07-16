import { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import dayjs from 'dayjs'

import { AppError } from '@utils/AppError'

import { updateMeal } from '@storage/meal/updateMeal'
import { findMealById } from '@storage/meal/findMealById'
import { MealStorageDTO } from '@storage/meal/types/MealStorageDTO'

import { Loading } from '@components/Loading'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'
import {
  MealForm,
  MealFormDataInput,
  MealFormDataOutput,
} from '@components/MealForm'

type RouteParams = {
  mealId: string
}

export function EditMeal() {
  const [meal, setMeal] = useState<MealStorageDTO | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const route = useRoute()
  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('details', { mealId })
  }

  async function handleEditMeal(mealToBeUpdated: MealFormDataOutput) {
    try {
      await updateMeal({
        ...mealToBeUpdated,
        id: mealId,
      })

      navigation.navigate('details', { mealId })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message)
        return
      }

      Alert.alert(
        'Editar refeição',
        'Ocorreu um erro ao editar sua refeição. Tente novamente.',
      )

      console.log(error)
    }
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
        'Ocorreu um erro ao buscar o registro da sua refeição. Tente novamente.',
      )

      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [mealId])

  useEffect(() => {
    fetchMeal()
  }, [fetchMeal])

  if (isLoading) {
    return <Loading />
  }

  const dateFormattedOfMeal = dayjs(meal?.realizedAt).format('DD/MM/YYYY')
  const timeFormattedOfMeal = dayjs(meal?.realizedAt).format('HH:mm')

  const mealToBeUpdated: MealFormDataInput = {
    name: meal?.name ?? '',
    description: meal?.description ?? '',
    date: dateFormattedOfMeal,
    time: timeFormattedOfMeal,
    isInsideDiet: meal?.isInsideDiet ?? false,
  }

  return (
    <View className="flex-1">
      <ScreenHeader.Root>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela da refeição"
          accessibilityHint="Tela com os detalhes da refeição que você já cadastrou"
          icon={ArrowLeft}
          onPress={handleGoBack}
        />

        <ScreenHeader.Title>Editar refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <MealForm
          action="edit"
          defaultValues={mealToBeUpdated}
          onSubmit={handleEditMeal}
        />
      </Container>
    </View>
  )
}

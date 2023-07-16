import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealStorageDTO } from './MealStorageDTO'

import { AppError } from '@utils/AppError'
import { MEAL_COLLECTION } from '@constants/storage/meal'

import { listAllMeals } from './listAllMeals'

export async function updateMeal(mealToBeUpdated: MealStorageDTO) {
  const storedMeals = await listAllMeals()

  const mealToBeUpdatedIndex = storedMeals.findIndex(
    (storedMeal) => storedMeal.id === mealToBeUpdated.id,
  )

  if (mealToBeUpdatedIndex < 0) {
    throw new AppError('Não foi possível encontrar essa refeição para editar.')
  }

  const originalMeal = storedMeals[mealToBeUpdatedIndex]

  const updatedMeal = {
    ...originalMeal,
    ...mealToBeUpdated,
  }

  storedMeals[mealToBeUpdatedIndex] = updatedMeal

  const storage = JSON.stringify(storedMeals)
  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}

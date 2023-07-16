import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

import { MEAL_COLLECTION } from '@constants/storage/meal'

import { MealStorageDTO } from './types/MealStorageDTO'
import { listAllMeals } from './listAllMeals'

export async function createMeal(meal: Omit<MealStorageDTO, 'id'>) {
  const storedMeals = await listAllMeals()

  const id = uuid.v4()
  const storage = JSON.stringify([...storedMeals, { id, ...meal }])

  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}

import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@constants/storage/meal'

import { MealStorageDTO } from './MealStorageDTO'

export async function listAllMeals() {
  const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

  const meals: MealStorageDTO[] = storedMeals ? JSON.parse(storedMeals) : []

  return meals
}

import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@constants/storage/meal'

import { sortMealsByMoreRecent } from '@utils/sortMealsByMoreRecent'

import { MealStorageDTO } from './types/MealStorageDTO'

export async function listAllMeals() {
  const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

  const meals: MealStorageDTO[] = storedMeals ? JSON.parse(storedMeals) : []

  const sortedMeals = sortMealsByMoreRecent(meals)

  return sortedMeals
}

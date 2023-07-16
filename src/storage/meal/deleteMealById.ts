import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@constants/storage/meal'

import { listAllMeals } from './listAllMeals'

export async function deleteMealById(mealId: string) {
  const storedMeals = await listAllMeals()

  const storedMealsWithoutMealToBeRemoved = storedMeals.filter(
    (storedMeal) => storedMeal.id !== mealId,
  )

  const storage = JSON.stringify(storedMealsWithoutMealToBeRemoved)
  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}

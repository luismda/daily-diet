import { listAllMeals } from './listAllMeals'

export async function findMealById(mealId: string) {
  const storedMeals = await listAllMeals()

  const meal = storedMeals.find((meal) => meal.id === mealId)

  if (!meal) {
    return null
  }

  return meal
}

import { AppError } from '@utils/AppError'
import { listAllMeals } from './listAllMeals'

export async function findMealById(mealId: string) {
  const storedMeals = await listAllMeals()

  const meal = storedMeals.find((meal) => meal.id === mealId)

  if (!meal) {
    throw new AppError('Não foi possível encontrar essa refeição.')
  }

  return meal
}

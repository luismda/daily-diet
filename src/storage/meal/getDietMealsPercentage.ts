import { listAllMeals } from './listAllMeals'

export async function getDietMealsPercentage() {
  const storedMeals = await listAllMeals()

  const totalMeals = storedMeals.length

  const totalMealsInDiet = storedMeals.reduce((acc, meal) => {
    if (meal.isInsideDiet) {
      acc += 1
    }

    return acc
  }, 0)

  const dietMealsPercentage = totalMealsInDiet / totalMeals

  return dietMealsPercentage
}

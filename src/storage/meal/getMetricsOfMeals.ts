import { MetricsOfMealsStorageDTO } from './MealStorageDTO'

import { listAllMeals } from './listAllMeals'

export async function getMetricsOfMeals() {
  const storedMeals = await listAllMeals()

  const totalMeals = storedMeals.length

  const { totalMealsInDiet, totalMealsOffDiet } = storedMeals.reduce(
    (acc, meal) => {
      if (meal.isInsideDiet) {
        acc.totalMealsInDiet += 1
      } else {
        acc.totalMealsOffDiet += 1
      }

      return acc
    },
    { totalMealsInDiet: 0, totalMealsOffDiet: 0 },
  )

  const { bestSequenceMealsInDiet } = storedMeals.reduce(
    (acc, meal) => {
      if (meal.isInsideDiet) {
        acc.currentSequenceMealsInDiet += 1
      } else {
        if (acc.currentSequenceMealsInDiet > acc.bestSequenceMealsInDiet) {
          acc.bestSequenceMealsInDiet = acc.currentSequenceMealsInDiet
        }

        acc.currentSequenceMealsInDiet = 0
      }

      return acc
    },
    {
      bestSequenceMealsInDiet: 0,
      currentSequenceMealsInDiet: 0,
    },
  )

  const dietMealsPercentage = totalMealsInDiet / totalMeals

  const metricsOfMeals: MetricsOfMealsStorageDTO = {
    totalMeals,
    totalMealsInDiet,
    totalMealsOffDiet,
    dietMealsPercentage,
    bestSequenceMealsInDiet,
  }

  return metricsOfMeals
}

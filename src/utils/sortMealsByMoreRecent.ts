import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export function sortMealsByMoreRecent(meals: MealStorageDTO[]) {
  const sortedMealsByMoreRecent = meals.sort((a, b) => {
    const firstMealDate = new Date(a.realizedAt).getTime()
    const secondMealDate = new Date(b.realizedAt).getTime()

    return secondMealDate - firstMealDate
  })

  return sortedMealsByMoreRecent
}

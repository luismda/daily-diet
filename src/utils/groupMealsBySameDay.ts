import dayjs from 'dayjs'

import {
  GroupedMealsStorageDTO,
  MealStorageDTO,
} from '@storage/meal/types/MealStorageDTO'

export function groupMealsBySameDay(meals: MealStorageDTO[]) {
  const groupedMealsBySameDay = meals.reduce<GroupedMealsStorageDTO[]>(
    (acc, meal) => {
      const dayAlreadyGroupedIndex = acc.findIndex((groupedMeals) => {
        return dayjs(groupedMeals.title).isSame(meal.realizedAt, 'day')
      })

      if (dayAlreadyGroupedIndex >= 0) {
        acc[dayAlreadyGroupedIndex].data.push(meal)
      } else {
        acc.push({
          title: meal.realizedAt,
          data: [meal],
        })
      }

      return acc
    },
    [],
  )

  return groupedMealsBySameDay
}

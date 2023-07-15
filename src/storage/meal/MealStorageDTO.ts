export interface MealStorageDTO {
  id: string
  name: string
  description: string
  isInsideDiet: boolean
  realizedAt: string
}

export interface GroupedMealsDTO {
  title: string
  data: MealStorageDTO[]
}

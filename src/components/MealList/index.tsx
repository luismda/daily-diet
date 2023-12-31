import { SectionList } from 'react-native'
import dayjs from 'dayjs'

import { GroupedMealsStorageDTO } from '@storage/meal/types/MealStorageDTO'

import { Text } from '@components/Text'
import { MealCard } from '@components/MealCard'

interface MealListProps {
  meals: GroupedMealsStorageDTO[]
  onSelectedMeal: (mealId: string) => void
}

export function MealList({ meals, onSelectedMeal }: MealListProps) {
  return (
    <SectionList
      sections={meals}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section: { title } }) => (
        <Text weight="bold" size="lg" className="text-gray-900">
          {dayjs(title).format('DD.MM.YY')}
        </Text>
      )}
      renderItem={({ item, index, section }) => (
        <MealCard
          name={item.name}
          time={dayjs(item.realizedAt).format('HH:mm')}
          isInsideDiet={item.isInsideDiet}
          className={`mt-2 ${index === section.data.length - 1 ? 'mb-8' : ''}`}
          onPress={() => onSelectedMeal(item.id)}
        />
      )}
    />
  )
}

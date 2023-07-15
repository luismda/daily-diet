import { SectionList } from 'react-native'
import dayjs from 'dayjs'

import { GroupedMealsDTO } from '@storage/meal/MealStorageDTO'

import { Text } from '@components/Text'
import { MealCard } from '@components/MealCard'

interface MealListProps {
  meals: GroupedMealsDTO[]
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
          accessibilityLabel={`Ver detalhes da refeição ${item.name}`}
          accessibilityHint={`Tela de detalhes da refeição ${item.name}`}
          className={`mt-2 ${index === section.data.length - 1 ? 'mb-8' : ''}`}
          onPress={() => onSelectedMeal(item.id)}
        />
      )}
    />
  )
}

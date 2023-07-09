import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { MealForm } from '@components/MealForm'
import { ArrowLeft } from 'phosphor-react-native'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'

type RouteParams = {
  mealId: string
}

export function EditMeal() {
  const navigation = useNavigation()

  const route = useRoute()
  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('details', { mealId })
  }

  return (
    <View className="flex-1">
      <ScreenHeader.Root>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela da refeição"
          accessibilityHint="Tela da refeição que você já cadastrou"
          icon={ArrowLeft}
          onPress={handleGoBack}
        />

        <ScreenHeader.Title>Editar refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <MealForm action="edit" />
      </Container>
    </View>
  )
}

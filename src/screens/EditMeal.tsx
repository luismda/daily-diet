import { View } from 'react-native'

import { MealForm } from '@components/MealForm'
import { ArrowLeft } from 'phosphor-react-native'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'

export function EditMeal() {
  return (
    <View className="flex-1">
      <ScreenHeader.Root>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela da refeição"
          accessibilityHint="Tela da refeição que você já cadastrou"
          icon={ArrowLeft}
        />

        <ScreenHeader.Title>Editar refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <MealForm action="edit" />
      </Container>
    </View>
  )
}

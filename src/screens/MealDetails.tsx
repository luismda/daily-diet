import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { DietTag } from '@components/DietTag'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'

type RouteParams = {
  mealId: string
}

export function MealDetails() {
  const navigation = useNavigation()

  const route = useRoute()
  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleNavigateToEditMeal() {
    navigation.navigate('edit', { mealId })
  }

  const isInsideDiet = false

  return (
    <View className="flex-1">
      <ScreenHeader.Root variant={isInsideDiet ? 'success' : 'danger'}>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela anterior"
          accessibilityHint="Tela inicial com a sua lista de refeições cadastradas"
          icon={ArrowLeft}
          onPress={handleGoBack}
        />

        <ScreenHeader.Title>Refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <View className="flex-1">
          <View>
            <Text weight="bold" size="xl" className="text-gray-900">
              Sanduíche
            </Text>

            <Text className="mt-2">
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Text>
          </View>

          <View className="mt-6">
            <Text weight="bold" size="sm" className="text-gray-900">
              Data e hora
            </Text>

            <Text className="mt-2">12/08/2022 às 16:00</Text>
          </View>

          <DietTag isInsideDiet={isInsideDiet} className="mt-6 self-start" />
        </View>

        <Button.Root
          accessibilityHint="Tela para editar os dados desta refeição"
          onPress={handleNavigateToEditMeal}
        >
          <Button.Icon icon={PencilSimpleLine} />

          <Button.Text>Editar refeição</Button.Text>
        </Button.Root>

        <Button.Root variant="secondary" className="mt-2">
          <Button.Icon variant="secondary" icon={Trash} />

          <Button.Text variant="secondary">Excluir refeição</Button.Text>
        </Button.Root>
      </Container>
    </View>
  )
}

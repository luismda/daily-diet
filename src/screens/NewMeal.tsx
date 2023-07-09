import { View } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { MealForm } from '@components/MealForm'
import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'

export function NewMeal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <View className="flex-1">
      <ScreenHeader.Root>
        <ScreenHeader.ButtonIcon
          accessibilityLabel="Voltar para tela anterior"
          accessibilityHint="Tela inicial com a sua lista de refeições cadastradas"
          icon={ArrowLeft}
          onPress={handleGoBack}
        />

        <ScreenHeader.Title>Nova refeição</ScreenHeader.Title>
      </ScreenHeader.Root>

      <Container>
        <MealForm />
      </Container>
    </View>
  )
}

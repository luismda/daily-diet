import { View, Alert } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { createMeal } from '@storage/meal/createMeal'

import { Container } from '@components/Container'
import { ScreenHeader } from '@components/ScreenHeader'
import { MealForm, MealFormDataOutput } from '@components/MealForm'

export function NewMeal() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  async function handleCreateNewMeal(meal: MealFormDataOutput) {
    try {
      await createMeal(meal)

      navigation.navigate('feedback', { isInsideDiet: meal.isInsideDiet })
    } catch (error) {
      Alert.alert(
        'Nova refeição',
        'Ocorreu um erro ao cadastrar sua refeição. Tente novamente.',
      )

      console.log(error)
    }
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
        <MealForm onSubmit={handleCreateNewMeal} />
      </Container>
    </View>
  )
}

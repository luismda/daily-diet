import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { clsx } from 'clsx'

import primaryIllustrationImg from '@assets/primary_illustration.png'
import secondaryIllustrationImg from '@assets/secondary_illustration.png'

import { Text } from '@components/Text'
import { Button } from '@components/Button'

type RouteParams = {
  isInsideDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { isInsideDiet } = route.params as RouteParams

  function handleNavigateToHome() {
    navigation.navigate('home')
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center px-8">
      <View className="space-y-2">
        <Text
          weight="bold"
          size="2xl"
          className={clsx('text-center', {
            'text-green-500': isInsideDiet,
            'text-red-500': !isInsideDiet,
          })}
        >
          {isInsideDiet ? 'Continue assim!' : 'Que pena!'}
        </Text>

        <Text className="text-center text-gray-900">
          {isInsideDiet ? (
            <>
              {'Você continua '}
              <Text weight="bold" className="text-gray-900">
                dentro da dieta.
              </Text>
              {' Muito bem!'}
            </>
          ) : (
            <>
              {'Você '}
              <Text weight="bold" className="text-gray-900">
                saiu da dieta
              </Text>
              {' dessa vez, mas continue se esforçando e não desista!'}
            </>
          )}
        </Text>
      </View>

      <View className="mt-10">
        {isInsideDiet ? (
          <Image
            source={primaryIllustrationImg}
            alt="Ilustração nas tonalidades de cores branco e preto de uma mulher, com a perna esquerda dobrada e levantada para trás, além dos dois braços levantados para cima e uma expressão feliz no rosto."
          />
        ) : (
          <Image
            source={secondaryIllustrationImg}
            alt="Ilustração nas tonalidades de cores branco e preto de um homem sentado em cima de um objeto com o braço direito levantado para cima e a mão inclinada de forma reta, tendo o ombro direito levemente mais alto que o esquerdo, além de uma expressão triste no rosto."
          />
        )}
      </View>

      <Button.Root
        accessibilityHint="Tela inicial com a sua lista de refeições cadastradas"
        className="mt-8"
        onPress={handleNavigateToHome}
      >
        <Button.Text>Ir para a página inicial</Button.Text>
      </Button.Root>
    </SafeAreaView>
  )
}

import { Image, View } from 'react-native'

import logoImg from '@assets/logo.png'

import { Avatar } from '@components/Avatar'

export function MainHeader() {
  return (
    <View className="mb-8 flex-row items-center justify-between">
      <Image
        source={logoImg}
        alt="Logo Daily Diet com uma ilustração de um garfo e uma faca mais arredondados em uma tonalidade de cor escura, com o texto Daily Diet posicionado ao lado direito também em uma cor escura fazendo contraste com o fundo claro, estando a palavra Daily acima da palavra Diet."
      />

      <Avatar source={{ uri: 'https://github.com/luismda.png' }} />
    </View>
  )
}

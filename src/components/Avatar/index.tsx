import { Image, ImageProps, View } from 'react-native'

interface AvatarProps extends ImageProps {}

export function Avatar(props: AvatarProps) {
  return (
    <View className="h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-gray-800">
      <Image className="h-10 w-10 object-cover" alt="" {...props} />
    </View>
  )
}

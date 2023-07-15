import { ActivityIndicator, View } from 'react-native'
import { styled } from 'nativewind'

const StyledActivityIndicator = styled(ActivityIndicator, {
  classProps: ['color'],
})

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <StyledActivityIndicator color="text-gray-900" />
    </View>
  )
}

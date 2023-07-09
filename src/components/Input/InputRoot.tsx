import { View, ViewProps } from 'react-native'

interface InputRootProps extends ViewProps {}

export function InputRoot(props: InputRootProps) {
  return <View className="space-y-1" {...props} />
}

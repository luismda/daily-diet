import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface ButtonIconRootProps extends TouchableOpacityProps {}

export function ButtonIconRoot(props: ButtonIconRootProps) {
  return <TouchableOpacity activeOpacity={0.7} {...props} />
}

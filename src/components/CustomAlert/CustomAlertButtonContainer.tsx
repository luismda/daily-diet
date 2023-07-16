import { View, ViewProps } from 'react-native'

interface CustomAlertButtonContainerProps extends ViewProps {}

export function CustomAlertButtonContainer(
  props: CustomAlertButtonContainerProps,
) {
  return (
    <View
      className="w-full flex-row items-center justify-center space-x-3"
      {...props}
    />
  )
}

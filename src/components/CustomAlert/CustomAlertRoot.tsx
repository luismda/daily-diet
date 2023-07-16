import { Modal, ModalProps, View } from 'react-native'

interface CustomAlertRootProps extends ModalProps {}

export function CustomAlertRoot({ children, ...rest }: CustomAlertRootProps) {
  return (
    <Modal animationType="fade" statusBarTranslucent transparent {...rest}>
      <View className="h-full w-full bg-black/25">
        <View className="absolute bottom-[40%] left-6 right-6 space-y-8 rounded-lg bg-gray-100 px-6 pb-6 pt-10">
          {children}
        </View>
      </View>
    </Modal>
  )
}

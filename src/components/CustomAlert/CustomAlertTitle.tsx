import { Text, TextProps } from '@components/Text'

interface CustomAlertTitleProps extends TextProps {}

export function CustomAlertTitle(props: CustomAlertTitleProps) {
  return (
    <Text weight="bold" size="lg" className="px-4 text-center" {...props} />
  )
}

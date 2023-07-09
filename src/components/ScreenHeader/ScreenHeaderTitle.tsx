import { Text, TextProps } from '@components/Text'

interface ScreenHeaderTitleProps extends TextProps {}

export function ScreenHeaderTitle(props: ScreenHeaderTitleProps) {
  return (
    <Text
      weight="bold"
      size="lg"
      className="flex-1 text-center text-gray-900"
      {...props}
    />
  )
}

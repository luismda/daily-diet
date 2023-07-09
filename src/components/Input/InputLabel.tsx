import { Text, TextProps } from '@components/Text'

interface InputLabelProps extends TextProps {}

export function InputLabel(props: InputLabelProps) {
  return <Text weight="bold" size="sm" className="text-gray-800" {...props} />
}

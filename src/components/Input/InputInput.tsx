import { TextInput, TextInputProps } from 'react-native'

interface InputInputProps extends TextInputProps {}

export function InputInput({ className, ...rest }: InputInputProps) {
  return (
    <TextInput
      cursorColor="#1B1D1E"
      className="rounded-md border border-gray-300 px-[14px] py-3 font-body text-md leading-tight text-gray-900"
      {...rest}
    />
  )
}

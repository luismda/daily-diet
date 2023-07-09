import { ScrollView, View } from 'react-native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { SelectButton } from '@components/SelectButton'

interface MealFormProps {
  action?: 'create' | 'edit'
}

export function MealForm({ action = 'create' }: MealFormProps) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 space-y-6 pb-8">
        <Input.Root>
          <Input.Label>Nome</Input.Label>

          <Input.Input accessibilityLabel="Informe o nome da refeição" />
        </Input.Root>

        <Input.Root>
          <Input.Label>Descrição</Input.Label>

          <Input.Input
            multiline
            textAlignVertical="top"
            numberOfLines={6}
            accessibilityLabel="Descreva com mais detalhes a refeição"
          />
        </Input.Root>

        <View className="flex-row items-center space-x-6">
          <Input.Root className="flex-1">
            <Input.Label>Data</Input.Label>

            <Input.Input accessibilityLabel="Informe a data em que a refeição aconteceu" />
          </Input.Root>

          <Input.Root className="flex-1">
            <Input.Label>Hora</Input.Label>

            <Input.Input accessibilityLabel="Informe o horário em que a refeição aconteceu" />
          </Input.Root>
        </View>

        <View>
          <Input.Label>Está dentro da dieta?</Input.Label>

          <View className="mt-2 flex-row items-center space-x-2">
            <SelectButton
              text="Sim"
              variant="success"
              accessibilityLabel="Selecione esta opção se sua refeição está dentro da dieta"
              isSelected
              className="flex-1"
            />
            <SelectButton
              text="Não"
              variant="danger"
              accessibilityLabel="Selecione esta opção se sua refeição não está dentro da dieta"
              className="flex-1"
            />
          </View>
        </View>
      </View>

      <Button.Root>
        <Button.Text>
          {action === 'create' ? 'Cadastrar refeição' : 'Salvar alterações'}
        </Button.Text>
      </Button.Root>
    </ScrollView>
  )
}

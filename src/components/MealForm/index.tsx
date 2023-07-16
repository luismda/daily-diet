import { ScrollView, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { addInputDateMask, addInputTimeMask } from '@utils/inputMask'

import { mealFormSchema } from '@schemas/mealFormSchema'

import { Text } from '@components/Text'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { SelectButton } from '@components/SelectButton'

export type MealFormDataInput = z.input<typeof mealFormSchema>
export type MealFormDataOutput = z.output<typeof mealFormSchema>

interface MealFormProps {
  action?: 'create' | 'edit'
  defaultValues?: MealFormDataInput
  onSubmit: (meal: MealFormDataOutput) => Promise<void>
}

export function MealForm({
  action = 'create',
  defaultValues,
  onSubmit,
}: MealFormProps) {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<MealFormDataInput>({
    resolver: zodResolver(mealFormSchema),
    defaultValues,
  })

  async function handleMealFormSubmit(meal: MealFormDataOutput) {
    await onSubmit(meal)

    reset()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 space-y-6 pb-8">
        <Input.Root>
          <Input.Label>Nome</Input.Label>

          <Controller
            name="name"
            control={control}
            render={({ field: { value, onBlur, onChange } }) => {
              return (
                <Input.Input
                  accessibilityLabel="Informe o nome da refeição"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )
            }}
          />

          {errors.name && (
            <Text size="xs" className="text-red-500">
              {errors.name.message}
            </Text>
          )}
        </Input.Root>

        <Input.Root>
          <Input.Label>Descrição</Input.Label>

          <Controller
            name="description"
            control={control}
            render={({ field: { value, onBlur, onChange } }) => {
              return (
                <Input.Input
                  multiline
                  textAlignVertical="top"
                  numberOfLines={6}
                  accessibilityLabel="Descreva com mais detalhes a refeição"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )
            }}
          />

          {errors.description && (
            <Text size="xs" className="text-red-500">
              {errors.description.message}
            </Text>
          )}
        </Input.Root>

        <View className="flex-row items-center space-x-6">
          <Input.Root className="flex-1">
            <Input.Label>Data</Input.Label>

            <Controller
              name="date"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => {
                return (
                  <Input.Input
                    accessibilityLabel="Informe a data em que a refeição aconteceu"
                    keyboardType="numeric"
                    maxLength={10}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(date) => {
                      const dateWithMask = addInputDateMask(date)
                      onChange(dateWithMask)
                    }}
                  />
                )
              }}
            />

            {errors.date && (
              <Text size="xs" className="text-red-500">
                {errors.date.message}
              </Text>
            )}
          </Input.Root>

          <Input.Root className="flex-1">
            <Input.Label>Hora</Input.Label>

            <Controller
              name="time"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => {
                return (
                  <Input.Input
                    accessibilityLabel="Informe o horário em que a refeição aconteceu"
                    keyboardType="numeric"
                    maxLength={5}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(time) => {
                      const timeWithMask = addInputTimeMask(time)
                      onChange(timeWithMask)
                    }}
                  />
                )
              }}
            />

            {errors.time && (
              <Text size="xs" className="text-red-500">
                {errors.time.message}
              </Text>
            )}
          </Input.Root>
        </View>

        <View>
          <Input.Label>Está dentro da dieta?</Input.Label>

          <View className="mt-2 flex-row items-center">
            <Controller
              name="isInsideDiet"
              control={control}
              render={({ field: { value, onBlur, onChange } }) => {
                return (
                  <>
                    <SelectButton
                      text="Sim"
                      variant="success"
                      accessibilityLabel="Selecione esta opção se sua refeição está dentro da dieta"
                      isSelected={value === true}
                      className="mr-2 flex-1"
                      onBlur={onBlur}
                      onPress={() => onChange(true)}
                    />

                    <SelectButton
                      text="Não"
                      variant="danger"
                      accessibilityLabel="Selecione esta opção se sua refeição não está dentro da dieta"
                      isSelected={value === false}
                      className="flex-1"
                      onBlur={onBlur}
                      onPress={() => onChange(false)}
                    />
                  </>
                )
              }}
            />
          </View>

          {errors.isInsideDiet && (
            <Text size="xs" className="mt-1 text-red-500">
              {errors.isInsideDiet.message}
            </Text>
          )}
        </View>
      </View>

      <Button.Root
        disabled={isSubmitting}
        // @ts-expect-error: It's a type incompatibility of react-hook-form with input and output feature of zod
        onPress={handleSubmit(handleMealFormSubmit)}
      >
        {isSubmitting ? (
          <Button.Loading />
        ) : (
          <Button.Text>
            {action === 'create' ? 'Cadastrar refeição' : 'Salvar alterações'}
          </Button.Text>
        )}
      </Button.Root>
    </ScrollView>
  )
}

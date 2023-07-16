import { z } from 'zod'
import dayjs from 'dayjs'

export const mealFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Diga o nome da refeição' })
      .trim()
      .nonempty('Diga o nome da refeição'),
    description: z
      .string({ required_error: 'Descreva detalhes dessa refeição' })
      .trim()
      .nonempty('Descreva detalhes dessa refeição'),
    date: z
      .string({ required_error: 'Diga a data da refeição' })
      .trim()
      .refine((date) => {
        const isDateValid = dayjs(date, 'DD/MM/YYYY', true).isValid()

        return isDateValid
      }, 'Digite uma data válida')
      .refine((date) => {
        const isDateAfterOfNow = dayjs(date, 'DD/MM/YYYY', true).isAfter()

        return !isDateAfterOfNow
      }, 'A data não pode ser no futuro'),
    time: z
      .string({ required_error: 'Diga a hora da refeição' })
      .trim()
      .refine((time) => {
        const isTimeValid = dayjs(time, 'HH:mm', true).isValid()

        return isTimeValid
      }, 'Digite uma hora válida'),
    isInsideDiet: z.boolean({
      required_error: 'Diga se ela está ou não na dieta',
    }),
  })
  .transform((meal) => {
    const dateOfMeal = dayjs(
      `${meal.date} ${meal.time}`,
      'DD/MM/YYYY HH:mm',
      true,
    )

    return {
      name: meal.name,
      description: meal.description,
      isInsideDiet: meal.isInsideDiet,
      realizedAt: dateOfMeal.toDate().toISOString(),
    }
  })

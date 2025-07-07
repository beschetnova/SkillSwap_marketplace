import z from "zod";

export const stepOneSchema = z.object({
  email: z.string().email({message: 'Неверный формат эл. почты'}),
  password: z.string().min(8, {message: 'Пароль должен содержать не менее 8 знаков'})
})

export type StepOneType = z.infer<typeof stepOneSchema>
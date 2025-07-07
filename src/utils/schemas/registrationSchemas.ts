import z from 'zod';

export const stepOneSchema = z.object({
  email: z.string().email({ message: 'Неверный формат эл. почты' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 знаков' })
});

// заглушки
export const stepTwoSchema = z.object({});
export const stepThreeSchema = z.object({});

export type StepOneType = z.infer<typeof stepOneSchema>;
export type StepTwoType = z.infer<typeof stepTwoSchema>;
export type StepThreeType = z.infer<typeof stepThreeSchema>;
export type RegisterFormType = Partial<StepOneType & StepTwoType & StepThreeType>;

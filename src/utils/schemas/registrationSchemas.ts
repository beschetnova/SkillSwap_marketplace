import z from 'zod';

export const stepOneSchema = z.object({
  email: z.string().email({ message: 'Неверный формат эл. почты' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 знаков' })
});

// заглушки
export const stepTwoSchema = z.object({
  // userPic: нужно сделать
  name: z.string().nonempty({ message: 'Требуется указать имя' }),
  birthDate: z.date({
    required_error: 'Укажите дату рождения'
  }),
  gender: z.string().optional(),
  city: z.string().nonempty({message: 'Требуется указать город'}),
  categoryToLearn: z.string().nonempty({message: 'Требуется указать категорию'}),
  subcategoryToLearn: z.string().nonempty({message: 'Требуется указать подкатегорию'})
});
export const stepThreeSchema = z.object({});

export type StepOneType = z.infer<typeof stepOneSchema>;
export type StepTwoType = z.infer<typeof stepTwoSchema>;
export type StepThreeType = z.infer<typeof stepThreeSchema>;
export type RegisterFormType = Partial<
  StepOneType & StepTwoType & StepThreeType
>;

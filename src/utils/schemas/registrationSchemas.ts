import z from 'zod';

const max_image_size = 2 * 1024 * 1024;
const image_types = ['image/jpeg', 'image/jpg', 'image/png'];

export const stepOneSchema = z.object({
  email: z.string().email({ message: 'Неверный формат эл. почты' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 знаков' })
});

// заглушки
export const stepTwoSchema = z.object({
  // avatar: z
  //   .instanceof(File, {message: 'Требуется фотография'})
  //   .refine(
  //     (file) => file.size <= max_image_size,
  //     'Максимальный размер фотографии - 2 МБ'
  //   )
  //   .refine(
  //     (file) => image_types.includes(file.type),
  //     'Доступны фотографии только JPEG и PNG формата'
  //   ),
  name: z.string().nonempty({ message: 'Требуется указать имя' }),
  birthDate: z.date({
    required_error: 'Укажите дату рождения'
  }),
  gender: z.string().nonempty({message: 'Укажите пол'}),
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

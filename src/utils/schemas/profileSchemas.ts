import z from 'zod';

/*  
const max_image_size = 2 * 1024 * 1024;
const image_types = ['image/jpeg', 'image/jpg', 'image/png'];
*/

export const profileInfoSchema = z.object({
  email: z.string().email({ message: 'Неверный формат электронной почты' }),
  name: z
    .string()
    .nonempty()
    .max(30, { message: 'Имя не должно содержать более 30 символов' }),
  birthDate: z.string(),
  gender: z.string(),
  city: z.string(),
  description: z
    .string()
    .max(500, { message: 'Описание не должно превышать 500 символов' })
    .optional(),
  avatar: z.string()
  /* Изменить, когда мы будем подгружать фото файлом при регистрации и сохранять в слайс
    avatar: z
        .instanceof(File, { message: 'Требуется фотография' })
        .refine(
          (file) => file.size <= max_image_size,
          'Максимальный размер фотографии - 2 МБ'
        )
        .refine(
          (file) => image_types.includes(file.type),
          'Доступны фотографии только JPEG и PNG формата'
        )
    */
});

export type profileInfoType = z.infer<typeof profileInfoSchema>;

import styles from './CreateForm.module.css';
import Button from '../buttons/button';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect';
import Textarea from '../Textarea/Textarea';
import { ImageDropzone } from '../ImageDropzone/ImageDropzone';
import type { TSkillForm, TCreateFormProps } from './type';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../input/input';
import {
  createFormSchema,
  type CreateFormData
} from '../../../utils/schemas/registrationSchemas';

export const CreateFormUI = ({ createSkill }: TCreateFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
    mode: 'all',
    defaultValues: {
      skillName: '',
      category: '',
      subcategory: '',
      skillDescription: '',
      images: []
    }
  });

  const watchedCategory = watch('category');

  const onSubmit = (data: CreateFormData) => {
    if (createSkill) {
      const skill: TSkillForm = {
        category: data.category,
        subcategory: data.subcategory,
        skillName: data.skillName,
        skillDescription: data.skillDescription || '',
        images: data.images
      };
      createSkill(skill);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <div className={styles.inputList}>
        <Input
          id='titleInput'
          label='Название навыка'
          type='text'
          placeholder='Введите название вашего навыка'
          {...register('skillName')}
          error={errors.skillName?.message}
        />

        <CategorySelect
          {...register('category')}
          error={errors.category?.message}
        />

        <SubCategorySelect
          {...register('subcategory')}
          category={watchedCategory}
          error={errors.subcategory?.message}
        />

        <Textarea
          id='descriptionInput'
          label='Описание'
          placeholder='Коротко опишите, чему можете научить'
          {...register('skillDescription')}
          error={errors.skillDescription?.message}
        />

        <Controller
          name='images'
          control={control}
          defaultValue={[]}
          render={({ field, fieldState }) => (
            <div>
              <ImageDropzone
                images={field.value || []}
                onDrop={(acceptedFiles) => {
                  field.onChange([...(field.value || []), ...acceptedFiles]);
                }}
                onRemove={(index) => {
                  const newImages = [...(field.value || [])];
                  newImages.splice(index, 1);
                  field.onChange(newImages);
                }}
              />
              {fieldState.error && (
                <p className={styles.errorText}>{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.buttonList}>
        <Button
          type='primary'
          htmlType='submit'
          className={styles.button}
          disabled={!isValid}
        >
          Создать
        </Button>
      </div>
    </form>
  );
};

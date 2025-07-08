import styles from './RegisterFormStepThree.module.css';
import Input from '../input/input';
import Button from '../buttons/button';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect';
import Textarea from '../Textarea/Textarea';
import { ImageDropzone } from '../ImageDropzone/ImageDropzone';
import {
  stepThreeSchema,
  type RegisterFormType,
  type StepThreeType
} from '../../../utils/schemas/registrationSchemas';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  onNext: (data: StepThreeType) => void;
  onPrev: () => void;
  defaultValues: RegisterFormType;
};

export const RegisterFormStepThreeUI = ({
  onNext,
  onPrev,
  defaultValues
}: Props) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<StepThreeType>({
    resolver: zodResolver(stepThreeSchema),
    mode: 'all',
    defaultValues
  });

  const watchedCategory = watch('categoryToTeach');
  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onNext)(e);
  };
  const handleBack = () => {
    onPrev();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputList}>
        <Input
          id='titleInput'
          label='Название навыка'
          type='text'
          placeholder='Введите название вашего навыка'
          {...register('title')}
          error={errors.title?.message}
        />
        <CategorySelect
          {...register('categoryToTeach')}
          error={errors.categoryToTeach?.message}
        />
        <SubCategorySelect
          {...register('subcategoryToTeach')}
          category={watchedCategory}
          error={errors.subcategoryToTeach?.message}
        />
        <Textarea
          id='descriptionInput'
          label='Описание'
          placeholder='Коротко опишите, чему можете научить'
          {...register('description')}
          error={errors.description?.message}
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
        <Button type='secondary' className={styles.button} onClick={handleBack}>
          Назад
        </Button>
        <Button
          type='primary'
          htmlType='submit'
          className={styles.button}
          disabled={!isValid}
        >
          Продолжить
        </Button>
      </div>
    </form>
  );
};

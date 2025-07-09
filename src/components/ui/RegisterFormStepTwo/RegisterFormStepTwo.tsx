import PhotoUploader from '../PhotoUploader/PhotoUploader.tsx';
import styles from './RegisterFormStepTwo.module.css';
import Input from '../input/input.tsx';
import Button from '../buttons/button.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Selects/Select/Select.tsx';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect.tsx';
import { CitySelect } from '../Selects/CitySelect/CitySelect.tsx';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect.tsx';
import {
  stepTwoSchema,
  type RegisterFormType,
  type StepTwoType
} from '../../../utils/schemas/registrationSchemas.ts';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  onNext: (data: StepTwoType) => void;
  onPrev: () => void;
  defaultValues: RegisterFormType;
};

const RegisterFormStepTwo = ({ onNext, onPrev, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch
  } = useForm<StepTwoType>({
    resolver: zodResolver(stepTwoSchema),
    mode: 'all',
    defaultValues
  });
  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onNext)(e);
  };
  const watchedCategoryToLearn = watch('categoryToLearn');
  const handleBack = () => {
    onPrev();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Controller
        name='avatar'
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={styles.photoUploader}>
            <PhotoUploader onChange={onChange} value={value} />
            {error && (
              <p className={styles.errorText}>{errors.avatar?.message}</p>
            )}
          </div>
        )}
      />

      <div className={styles.inputsWrapper}>
        <Input
          id='nameInput'
          label='Имя'
          type='text'
          placeholder='Введите ваше имя'
          {...register('name')}
          error={errors.name?.message}
        ></Input>
        <div className={styles.dateWrapper}>
          <Controller
            name='birthDate'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <DatePicker value={field.value} onChange={field.onChange} />
                {error && <p>{error.message}</p>}
              </div>
            )}
          />
          <Select
            id='genderInput'
            label='Пол'
            {...register('gender')}
            error={errors.gender?.message}
            options={[
              { value: '', label: 'Не указан' },
              { value: 'male', label: 'Мужской' },
              { value: 'female', label: 'Женский' },
              { value: 'other', label: 'Другое' }
            ]}
            rightIcon={
              <img
                src='/icons/chevron-down.svg'
                alt='Стрелка вниз'
                className={styles.arrow}
              />
            }
          ></Select>
        </div>
        <CitySelect {...register('city')} error={errors.city?.message} />
        <CategorySelect
          {...register('categoryToLearn')}
          error={errors.categoryToLearn?.message}
        />
        <SubCategorySelect
          {...register('subcategoryToLearn')}
          category={watchedCategoryToLearn}
          error={errors.subcategoryToLearn?.message}
        ></SubCategorySelect>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          type='secondary'
          htmlType='button'
          className={styles.backButton}
          onClick={handleBack}
        >
          Назад
        </Button>
        <Button
          type='primary'
          htmlType='submit'
          className={styles.nextButton}
          disabled={!isValid}
        >
          Продолжить
        </Button>
      </div>
    </form>
  );
};

export default RegisterFormStepTwo;

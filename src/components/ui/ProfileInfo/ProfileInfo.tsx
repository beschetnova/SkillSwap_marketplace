import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks.ts';

import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

import styles from './ProfileInfo.module.css';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  profileInfoSchema,
  type profileInfoType
} from '../../../utils/schemas/profileSchemas';

import Input from '../input/input.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Selects/Select/Select.tsx';
import { CitySelect } from '../Selects/CitySelect/CitySelect.tsx';
import Button from '../buttons/button';
import PhotoEditor from '../PhotoEditor/PhotoEditor.tsx';
import Textarea from '../Textarea/Textarea.tsx';
import {
  selectProfile,
  updateProfile
} from '../../../services/slices/profileSlice.ts';

export const ProfileInfo = () => {
  const dispatch = useAppDispatch();
  const userFromStore = useAppSelector(selectProfile);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue
  } = useForm<profileInfoType>({
    resolver: zodResolver(profileInfoSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      name: '',
      description: '',
      city: '',
      gender: '',
      birthDate: '',
      avatar: ''
    }
  });

  useEffect(() => {
    if (userFromStore) {
      setValue('email', userFromStore.email ?? '');
      setValue('name', userFromStore.name ?? '');
      setValue('description', userFromStore.bio ?? '');
      setValue('city', userFromStore.city ?? '');
      setValue('gender', userFromStore.gender ?? '');
      setValue('birthDate', userFromStore.birthDate ?? '');
      setValue(
        'avatar',
        userFromStore.photo ? `/db/profile-pics/${userFromStore.photo}` : ''
      );
    }
  }, [userFromStore, setValue]);

  const onSubmit = (data: profileInfoType) => {
    if (!userFromStore) return;

    const updatedProfile = {
      ...userFromStore,
      email: data.email,
      name: data.name,
      bio: data.description,
      city: data.city,
      gender: data.gender,
      birthDate: data.birthDate,
      photo: data.avatar
    };
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <form
      className={styles.profile_info}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)(e);
      }}
    >
      <div className={styles.info_content}>
        <div className={styles.info_inputs_wrapper}>
          <div className={styles.email_wrapper}>
            <Input
              id='emailInput'
              label='Почта'
              type='email'
              placeholder='Введите вашу почту'
              required
              {...register('email')}
              error={errors.email?.message}
              rightIcon={
                <img
                  src='src/images/icons/edit.svg'
                  alt='edit-icon'
                  className={styles.icon}
                />
              }
            />
            <p className={styles.change_password_link}>Изменить пароль</p>
          </div>
          <Input
            id='nameInput'
            label='Имя'
            type='text'
            placeholder='Введите ваше имя'
            required
            {...register('name')}
            error={errors.name?.message}
            rightIcon={
              <img
                src='src/images/icons/edit.svg'
                alt='edit-icon'
                className={styles.icon}
              />
            }
          />
          <div className={styles.date_wrapper}>
            <Controller
              name='birthDate'
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value ? parseISO(field.value) : null}
                  onChange={(date) => {
                    const dateStr = date
                      ? format(date, 'yyyy-MM-dd', { locale: ru })
                      : '';
                    field.onChange(dateStr);
                  }}
                />
              )}
            />
            <Select
              id='genderInput'
              label='Пол'
              value={watch('gender') || ''}
              onChange={(e) =>
                setValue('gender', e.target.value, { shouldValidate: true })
              }
              options={[
                { value: '', label: 'Не указан' },
                { value: 'male', label: 'Мужской' },
                { value: 'female', label: 'Женский' },
                { value: 'other', label: 'Другое' }
              ]}
              rightIcon={
                <img
                  src='src/images/icons/chevron-down.svg'
                  alt='chevron-down'
                  className={styles.arrow}
                />
              }
              error={errors.gender?.message}
            />
          </div>
          <CitySelect
            value={watch('city') || ''}
            onChange={(e) =>
              setValue('city', e.target.value, { shouldValidate: true })
            }
            error={errors.city?.message}
          />
          <Textarea
            label='О себе'
            placeholder='Расскажите о себе'
            icon='src/images/icons/edit.svg'
            {...register('description')}
            error={errors.description?.message}
          />
        </div>
        <Button type='primary' htmlType='submit' disabled={!isValid}>
          Сохранить
        </Button>
      </div>
      <Controller
        name='avatar'
        control={control}
        render={({ field }) => (
          <PhotoEditor
            photo={field.value || ''}
            setPhoto={(photo) => field.onChange(photo)}
            error={errors.avatar?.message}
          />
        )}
      />
    </form>
  );
};

export default ProfileInfo;

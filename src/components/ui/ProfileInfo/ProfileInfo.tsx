import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../utils/hooks.ts';

import { parseISO, format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

import styles from './ProfileInfo.module.css';

import Input from '../input/input.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Selects/Select/Select.tsx';
import { CitySelect } from '../Selects/CitySelect/CitySelect.tsx';
import Button from '../buttons/button';
import PhotoEditor from '../PhotoEditor/PhotoEditor.tsx';

import { profileSlice } from '../../../services/slices/profileSlice.ts';
import type { Profile } from '../../../utils/types.ts';
import type { RootState } from '../../../services/store.ts';

export const ProfileInfo = () => {
  const dispatch = useAppDispatch();
  const userFromStore = useSelector(
    (state: RootState) => state.profile.profile
  );
  const [profileData, setProfileData] = useState<Profile>({
    id: 0,
    name: '',
    city: '',
    gender: '',
    birthDate: '',
    bio: '',
    skillsToTeach: [],
    skillsToLearn: [],
    photo: '',
    email: '',
    favorites: []
  });

  const [initialProfileData, setInitialProfileData] = useState<Profile | null>(
    null
  );

  useEffect(() => {
    if (userFromStore) {
      setProfileData({
        ...userFromStore,
        email: userFromStore.email ?? ''
      });
      setInitialProfileData({
        ...userFromStore,
        email: userFromStore.email ?? ''
      });
    }
  }, [userFromStore]);

  const handleChange = <K extends keyof Profile>(
    field: K,
    value: Profile[K]
  ) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    dispatch(profileSlice.actions.updateProfile(profileData));
    setInitialProfileData(profileData);
  };

  const isEqual = (obj1: Profile, obj2: Profile): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  const isChanged = initialProfileData
    ? !isEqual(profileData, initialProfileData)
    : Object.values(profileData).some((value) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return !!value;
      });

  return (
    <div className={styles.profile_info}>
      <div className={styles.info_content}>
        <div className={styles.info_inputs_wrapper}>
          <div className={styles.email_wrapper}>
            <Input
              id='emailInput'
              label='Почта'
              type='email'
              placeholder='Введите вашу почту'
              required
              value={profileData.email}
              onChange={(e) => handleChange('email', e.target.value)}
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
            value={profileData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            rightIcon={
              <img
                src='src/images/icons/edit.svg'
                alt='edit-icon'
                className={styles.icon}
              />
            }
          />
          <div className={styles.date_wrapper}>
            <DatePicker
              value={
                profileData.birthDate ? parseISO(profileData.birthDate) : null
              }
              onChange={(date) => {
                const dateStr = date
                  ? format(date, 'yyyy-MM-dd', { locale: ru })
                  : '';
                handleChange('birthDate', dateStr);
              }}
            />
            <Select
              id='genderInput'
              label='Пол'
              value={profileData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
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
            />
          </div>
          <CitySelect
            city={profileData.city}
            setCity={(city) => handleChange('city', city)}
          />
          <div className={styles.description}>
            <label>О себе</label>
            <div className={styles.description_input_container}>
              <textarea
                id='description_input'
                placeholder='Расскажите о себе'
                required
                rows={4}
                className={styles.description_input}
                value={profileData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
              />
              <span className={styles.right_icon}>
                <img src='src/images/icons/edit.svg' alt='edit-icon' />
              </span>
            </div>
          </div>
        </div>
        <Button
          type='primary'
          htmlType='submit'
          onClick={handleSave}
          disabled={!isChanged}
        >
          Сохранить
        </Button>
      </div>
      <PhotoEditor
        photo={profileData.photo ? `/db/profile-pics/${profileData.photo}` : ''}
        setPhoto={(photo) => handleChange('photo', photo)}
      />
    </div>
  );
};

export default ProfileInfo;

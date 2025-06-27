import PhotoUploader from '../PhotoUploader/PhotoUploader.tsx';
import styles from './RegisterFormStepTwo.module.css';
import Input from '../input/input.tsx';
import Button from '../buttons/button.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Select/Select.tsx';
import { useState } from 'react';

const RegisterFormStepTwo = () => {
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  return (
    <form className={styles.form}>
      <PhotoUploader />
      <div className={styles.inputsWrapper}>
        <Input
          id='nameInput'
          label='Имя'
          type='text'
          placeholder='Введите ваше имя'
        ></Input>
        <div className={styles.dateWrapper}>
          <DatePicker />
          <Select
            id='genderInput'
            label='Пол'
            onChange={(e) => setGender(e.target.value)}
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
        <Select
          id='cityInput'
          label='Город'
          onChange={(e) => setCity(e.target.value)}
          options={[
            { value: '', label: 'Не указан' },
            { value: 'spb', label: 'Санкт-Петербург' },
            { value: 'mos', label: 'Москва' },
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
        <Select
          id='categoryInput'
          label='Категория навыка, которому хотите научиться'
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: '', label: 'Выберете категорию' },
            { value: 'spb', label: 'Санкт-Петербург' },
            { value: 'mos', label: 'Москва' },
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
        <Select
          id='subcategoryInput'
          label='Подкатегория навыка, которому хотите научиться'
          onChange={(e) => setSubcategory(e.target.value)}
          options={[
            { value: '', label: 'Выберете подкатегорию' },
            { value: 'spb', label: 'Санкт-Петербург' },
            { value: 'mos', label: 'Москва' },
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
      <div className={styles.buttonWrapper}>
        <Button
          type='secondary'
          htmlType='submit'
          className={styles.backButton}
        >
          Назад
        </Button>
        <Button type='primary' htmlType='submit' className={styles.nextButton}>
          Продолжить
        </Button>
      </div>
    </form>
  );
};

export default RegisterFormStepTwo;

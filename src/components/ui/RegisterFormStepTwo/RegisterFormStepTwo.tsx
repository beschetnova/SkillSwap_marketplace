import PhotoUploader from '../PhotoUploader/PhotoUploader.tsx';
import styles from './RegisterFormStepTwo.module.css';
import Input from '../input/input.tsx';
import Button from '../buttons/button.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Select/Select.tsx';
import { useState } from 'react';
import { selectAllSkills } from '../../../services/slices/skillsSlice.ts';
import { useAppSelector } from '../../../utils/hooks.ts';
import { selectAllCities } from '../../../services/slices/citiesSlice.ts';

const RegisterFormStepTwo = () => {
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const skillCategories = useAppSelector(selectAllSkills);

  const skillCategoryOptions = [
    { value: '', label: 'Выберите категорию' },
    ...skillCategories.map((cat) => ({
      value: cat.id,
      label: cat.name
    }))
  ];

  const selectedCategory = skillCategories.find((cat) => cat.id === category);

  const subcategoryOptions = selectedCategory
    ? [
        { value: '', label: 'Выберите подкатегорию' },
        ...selectedCategory.skills.map((skill) => ({
          value: skill.id,
          label: skill.name
        }))
      ]
    : [{ value: '', label: 'Сначала выберите категорию' }];

  const cities = useAppSelector(selectAllCities);

  const cityOptions = [
    { value: '', label: 'Не указан' },
    ...cities.map((city) => ({
      value: city.id.toString(),
      label: city.name
    }))
  ];

  return (
    <form className={styles.form}>
      <PhotoUploader />
      <div className={styles.inputsWrapper}>
        <Input
          id='nameInput'
          label='Имя'
          type='text'
          placeholder='Введите ваше имя'
          required
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
          options={cityOptions}
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
          options={skillCategoryOptions}
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
          options={subcategoryOptions}
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

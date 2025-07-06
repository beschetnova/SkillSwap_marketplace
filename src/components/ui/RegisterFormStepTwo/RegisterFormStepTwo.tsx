import PhotoUploader from '../PhotoUploader/PhotoUploader.tsx';
import styles from './RegisterFormStepTwo.module.css';
import Input from '../input/input.tsx';
import Button from '../buttons/button.tsx';
import DatePicker from '../../DatePicker/DatePicker.tsx';
import Select from '../Selects/Select/Select.tsx';
import { useState } from 'react';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect.tsx';
import { CitySelect } from '../Selects/CitySelect/CitySelect.tsx';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect.tsx';

type Props = {
  onNext: () => void;
};

const RegisterFormStepTwo = ({ onNext }: Props) => {
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика для валидации и отправки данных
    onNext();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
            value={gender}
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
        <CitySelect city={city} setCity={setCity}></CitySelect>
        <CategorySelect
          category={category}
          setCategory={setCategory}
        ></CategorySelect>
        <SubCategorySelect
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          category={category}
        ></SubCategorySelect>
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

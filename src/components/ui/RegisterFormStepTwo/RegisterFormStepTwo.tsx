import PhotoUploader from '../PhotoUploader/PhotoUploader.tsx';
import styles from './RegisterFormStepTwo.module.css';
import Input from '../input/input.tsx';
import Button from '../buttons/button.tsx';

const RegisterFormStepTwo = () => {
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
          <Input
            id='dateOfBirthInput'
            label='Дата рождения'
            type='date'
          ></Input>
          <Input
            id='genderInput'
            label='Пол'
            type='select'
            placeholder='Не указан'
          ></Input>
        </div>
        <Input
          id='cityInput'
          label='Город'
          type='select'
          placeholder='Не указан'
        ></Input>
        <Input
          id='categoryInput'
          label='Категория навыка, которому хотите научиться'
          type='select'
          placeholder='Выберете категорию'
        ></Input>
        <Input
          id='subcategoryInput'
          label='Подкатегория навыка, которому хотите научиться'
          type='select'
          placeholder='Выберете подкатегорию'
        ></Input>
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

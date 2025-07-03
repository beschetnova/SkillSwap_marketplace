import { useState } from 'react';
import styles from './RegisterFormStepOne.module.css';
import Input from '../input/input';
import Button from '../buttons/button';

type Props = {
  onNext: () => void;
};

export const RegisterFormStepOneUI = ({ onNext }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика для валидации и отправки данных
    onNext();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.elementList}>
        <Button type='secondary' className={styles.button}>
          <img src='/Google.svg' alt='Google' className={styles.icon} />
          <span>Продолжить с Google</span>
        </Button>
        <Button type='secondary' className={styles.button}>
          <img src='/Apple.svg' alt='Apple' className={styles.icon} />
          <span>Продолжить с Apple</span>
        </Button>
      </div>
      <div className={styles.divider}>
        <span className={styles.dividerText}>или</span>
      </div>

      <div className={styles.elementList}>
        <Input
          id='emailInput'
          label='Email'
          type='email'
          placeholder='Введите email'
        ></Input>

        <div className={styles.passwordWrapper}>
          <Input
            id='passwordInput'
            label='Пароль'
            placeholder='Придумайте надёжный пароль'
            type={showPassword ? 'text' : 'password'}
            info='Пароль должен содержать не менее 8 знаков'
            rightIcon={
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className={styles.buttonIcon}
              >
                <img src='/eye.svg' alt='Показать пароль' />
              </button>
            }
          ></Input>
        </div>
      </div>
      <Button type='primary' htmlType='submit' className={styles.submitButton}>
        Далее
      </Button>
    </form>
  );
};

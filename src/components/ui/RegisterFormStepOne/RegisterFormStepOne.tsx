import { useState } from 'react';
import styles from './RegisterFormStepOne.module.css';
import Input from '../input/input';
import Button from '../buttons/button';
import {
  stepOneSchema,
  type RegisterFormType,
  type StepOneType
} from '../../../utils/schemas/registrationSchemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  onNext: (data: StepOneType) => void;
  defaultValues: RegisterFormType;
};

export const RegisterFormStepOneUI = ({ onNext, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<StepOneType>({
    resolver: zodResolver(stepOneSchema),
    mode: 'onBlur',
    defaultValues: {
      email: defaultValues.email,
      password: defaultValues.password
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onNext)(e);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.elementList}>
        <Button type='secondary' className={styles.button}>
          <img src='/Google.svg' alt='Google' className={styles.icon} />
          <span>Продолжить с Google</span>
        </Button>
        <Button type='secondary' className={styles.button}>
          <img src='/Apple.svg' alt='Apple' className={styles.icon} />
          <span>Продолжить с Apple</span>
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
          {...register('email')}
          error={errors.email?.message}
        ></Input>

        <div className={styles.passwordWrapper}>
          <Input
            id='passwordInput'
            label='Пароль'
            placeholder='Придумайте надёжный пароль'
            type={showPassword ? 'text' : 'password'}
            info='Пароль должен содержать не менее 8 знаков'
            {...register('password')}
            error={errors.password?.message}
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
      <Button
        type='primary'
        htmlType='submit'
        className={styles.submitButton}
        disabled={!isValid}
      >
        Далее
      </Button>
    </form>
  );
};

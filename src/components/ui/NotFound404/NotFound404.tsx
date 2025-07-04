import type { FC } from 'react';
import Button from '../buttons/button';
import type { TNotFound404 } from './type';
import styles from './NotFound404.module.css';

const NotFound404UI: FC<TNotFound404> = ({
  redirectHandle,
  errorMessageHandle,
}) => {
  return (
    <div className={styles.container}>
      <img
        src='/src/images/Illustrations/error-404.svg'
        alt='404 Error'
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.text_content}>
          <h2>Страница не найдена</h2>
          <p>
            К сожалению, эта страница недоступна. Вернитесь <br/> на главную страницу или попробуйте позже
          </p>
        </div>

        <div className={styles.buttons}>
          <Button type='secondary' className={styles.button} onClick={errorMessageHandle}>
            Сообщить об ошибке
          </Button>
          <Button type='primary' className={styles.button} onClick={redirectHandle}>
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404UI;

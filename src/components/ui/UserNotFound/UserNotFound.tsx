import Button from '../buttons/button';
import styles from './UserNotFound.module.css';
import { useNavigate } from 'react-router-dom';

const UserNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text_content}>
          <h2>Пользователь не найден</h2>
          <p>
            К сожалению, пользователь с данным айди не был найден. Вернитесь на
            главную страницу или попробуйте позже
          </p>
        </div>

        <div className={styles.buttons}>
          <Button
            type='secondary'
            className={styles.button}
            onClick={() => console.log('ERROR!')}
          >
            Сообщить об ошибке
          </Button>
          <Button
            type='primary'
            className={styles.button}
            onClick={() => navigate('/')}
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserNotFound;

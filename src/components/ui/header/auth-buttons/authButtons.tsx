import styles from './authButtons.module.css';
import Button from '../../../ui/buttons/button';

type AuthButtonsProps = {
  setIsAuth: (value: boolean) => void;
};

const AuthButtons = ({ setIsAuth }: AuthButtonsProps) => {
  return (
    <div className={styles.auth}>
      <div className={styles.buttons}>
        <Button
          htmlType='button'
          type='secondary'
          onClick={() => setIsAuth(true)}
        >
          Войти
        </Button>
        <Button
          htmlType='button'
          type='primary'
          onClick={() => setIsAuth(true)}
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default AuthButtons;

import styles from './authButtons.module.css';
import Button from '../../../ui/buttons/button';
import { NavLink } from 'react-router-dom';

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
        <NavLink to={'/register'}>
          <Button htmlType='button' type='primary'>
            Зарегистрироваться
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AuthButtons;

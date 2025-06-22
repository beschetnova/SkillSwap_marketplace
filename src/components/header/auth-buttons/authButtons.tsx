import themeIcon from '../../../images/header-image/theme.svg';
import SecondaryButton from '../../ui/buttons/SecondaryButton';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import styles from './authButtons.module.css';

type AuthButtonsProps = {
    setIsAuth: (value: boolean) => void;
};

const AuthButtons = ({ setIsAuth }: AuthButtonsProps) => {
  return (
    <div className={styles.auth}>
      <button>
        <img src={themeIcon} alt='Переключить тему' />
      </button>
      <div className={styles.buttons}>
        <SecondaryButton onClick={() => setIsAuth(true)}>
          Войти
        </SecondaryButton>
        <PrimaryButton onClick={() => setIsAuth(true)}>
          Зарегистрироваться
        </PrimaryButton>
      </div>
    </div>
  );
};

export default AuthButtons;
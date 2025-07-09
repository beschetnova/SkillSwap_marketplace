import { useNavigate } from 'react-router-dom';
import NotFound404UI from '../../components/ui/NotFound404/NotFound404';
import styles from './NotFount404.module.css';

export const NotFound404 = () => {
  const navigate = useNavigate();

  const redirectHandle = () => {
    console.log('redirect to home page');
    navigate('/');
  };

  const errorMessageHandle = () => {
    console.log('ERROR!');
  };

  return (
    <div className={styles.component}>
      <NotFound404UI
        redirectHandle={redirectHandle}
        errorMessageHandle={errorMessageHandle}
      />
    </div>
  );
};

export default NotFound404;

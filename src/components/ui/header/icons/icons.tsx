import Button from '../../../ui/buttons/button';
import likeButton from '../../../../images/icons/like2.svg';
import notificationButton from '../../../../images/icons/notification.svg';
import styles from './icons.module.css';
import { NavLink } from 'react-router-dom';
import PathConstants from '../../../../routes/path-constants';

type Props = {
  isAuth: boolean;
};

const Icons = ({ isAuth }: Props) => {
  return (
    <section className={styles.section}>
      <Button
        type='tertiary'
        htmlType='button'
        className={styles.button}
      ></Button>

      {isAuth && (
        <>
          <Button type='tertiary' htmlType='button' className={styles.button}>
            <img src={notificationButton} alt='Уведомления' />
          </Button>
          <NavLink to={PathConstants.FAVORITES}>
            <Button type='tertiary' htmlType='button' className={styles.button}>
              <img src={likeButton} alt='Избранное' />
            </Button>
          </NavLink>
        </>
      )}
    </section>
  );
};

export default Icons;

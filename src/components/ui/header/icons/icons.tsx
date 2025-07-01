import Button from '../../../ui/buttons/button';
import likeButton from '../../../../images/icons/like2.svg';
import notificationButton from '../../../../images/icons/notification.svg';
import styles from './icons.module.css';

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
          <Button type='tertiary' htmlType='button' className={styles.button}>
            <img src={likeButton} alt='Избранное' />
          </Button>
        </>
      )}
    </section>
  );
};

export default Icons;

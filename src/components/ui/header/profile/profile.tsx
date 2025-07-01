import styles from './profile.module.css';
import profileIcon from '../../../../../public/db/profile-pics/Maria-Moscow.png';
import Button from '../../../ui/buttons/button';

const Profile = () => {
  return (
    <section className={styles.section}>
      <Button
        type='tertiary'
        htmlType='button'
        className={`${styles.button} ${styles.user}`}
      >
        <span>Имя пользователя</span>
        <img src={profileIcon} alt='Иконка профиля' className={styles.icon} />
      </Button>
    </section>
  );
};

export default Profile;

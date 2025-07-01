import styles from './profile.module.css';

import Button from '../../../ui/buttons/button';

type ProfileIconProps = {
  profileIcon: string;
};

const Profile = ({ profileIcon }: ProfileIconProps) => {
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

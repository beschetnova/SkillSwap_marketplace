import styles from './profile.module.css';
import likeButton from '../../../images/header-image/like.svg';
import notificationButton from '../../../images/header-image/notification.svg';
import profileIcon from '../../../images/header-image/profile-icon.png';
import themeIcon from '../../../images/header-image/theme.svg';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <button>
        <img src={themeIcon} alt='Переключить тему' />
      </button>
      <button className={styles.notification}>
        <img src={notificationButton} alt='Уведомления' />
      </button>
      <button className={styles.like}>
        <img src={likeButton} alt='Избранное' />
      </button>
      <button className={styles.user}>
        <p className={styles.profileName}>Имя пользователя</p>
        <img src={profileIcon} alt='Иконка профиля' />
      </button>
    </div>
  );
};

export default Profile;
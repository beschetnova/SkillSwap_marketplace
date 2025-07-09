import styles from './ProfileSidebar.module.css';

export const ProfileSidebar = () => {
  return (
    <div className={styles.profile_sidebar}>
      <div className={styles.sidebar_list}>
        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/request.svg'
            alt='request-icon'
            className={styles.icon}
          />
          <span>Заявки</span>
        </div>
        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/message-text.svg'
            alt='message-text-icon'
            className={styles.icon}
          />
          <span>Мои обмены</span>
        </div>
        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/like2.svg'
            alt='like-icon'
            className={styles.icon}
          />
          <span>Избранное</span>
        </div>
        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/idea.svg'
            alt='idea-icon'
            className={styles.icon}
          />
          <span>Мои навыки</span>
        </div>
        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/user.svg'
            alt='user-icon'
            className={styles.icon}
          />
          <span>Личные данные</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

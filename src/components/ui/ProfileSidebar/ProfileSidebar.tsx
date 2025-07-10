import { NavLink } from 'react-router-dom';
import styles from './ProfileSidebar.module.css';
import PathConstants from '../../../routes/path-constants';
import { useAppDispatch } from '../../../utils/hooks';
import { logoutUser } from '../../../services/slices/profileSlice';

export const ProfileSidebar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    void dispatch(logoutUser());
  };

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
        <NavLink to={PathConstants.FAVORITES}>
          <div className={styles.sidebar_item}>
            <img
              src='src/images/icons/like2.svg'
              alt='like-icon'
              className={styles.icon}
            />
            <span>Избранное</span>
          </div>
        </NavLink>
        <NavLink to={PathConstants.CREATE}>
          <div className={styles.sidebar_item}>
            <img
              src='src/images/icons/idea.svg'
              alt='idea-icon'
              className={styles.icon}
            />
            <span>Мои навыки</span>
          </div>
        </NavLink>

        <div className={styles.sidebar_item}>
          <img
            src='src/images/icons/user.svg'
            alt='user-icon'
            className={styles.icon}
          />
          <span>Личные данные</span>
        </div>
        <div className={styles.sidebar_item} onClick={handleLogout}>
          <img
            src='src/images/icons/user.svg'
            alt='logout-icon'
            className={styles.icon}
          />
          <span>Выйти из аккаунта</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

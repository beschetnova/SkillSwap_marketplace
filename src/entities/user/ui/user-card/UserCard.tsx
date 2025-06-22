import styles from './UserCard.module.css';
import type { User } from '../../model/types';

type UserCardProps = {
  user: User;
  // skillCategories: SkillCategory[];
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfoText}>
          <img src='/icons/Like.svg' alt='' className={styles.likeIcon} />
          <h3>{user.name}</h3>
          <p>
            {user.city}, {user.age} лет
          </p>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h4>Может научить:</h4>
        <div className={styles.skillsRow}>
          {user.skillsToTeach.slice(0, 2).map((skill, index) => (
            <span key={index} className={styles.skillPill}>
              {skill}
            </span>
          ))}
          {user.skillsToTeach.length - 2 > 0 && (
            <span className={styles.morePill}>
              +{user.skillsToTeach.length - 2}
            </span>
          )}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h4>Хочет научиться:</h4>
        <div className={styles.skillsRow}>
          {user.skillsToLearn.slice(0, 2).map((skill, index) => (
            <span key={index} className={styles.skillPill}>
              {skill}
            </span>
          ))}
          {user.skillsToLearn.length - 2 > 0 && (
            <span className={styles.morePill}>
              +{user.skillsToLearn.length - 2}
            </span>
          )}
        </div>
      </div>

      <button className={styles.detailsButton}>Подробнее</button>
    </div>
  );
};

export default UserCard;

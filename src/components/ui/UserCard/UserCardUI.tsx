import styles from './UserCard.module.css';
import type { SkillCategories, User } from '../../../utils/types.ts';
import { getSkillCategory } from '../../../utils/skill-category/getSkillCategory.ts';

type UserCardUIProps = {
  user: User;
  ageText: string;
  liked: boolean;
  categories: SkillCategories;
  onLikeClick: () => void;
  onMoreClick: () => void;
};

const UserCardUI = ({
  user,
  ageText,
  liked,
  categories,
  onLikeClick,
  onMoreClick
}: UserCardUIProps) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userInfo}>
        <img
          className={styles.avatar}
          src={`/db/profile-pics/${user.photo}`}
          alt={user.name}
        ></img>
        <div className={styles.userInfoText}>
          <img
            src={liked ? '/icons/LikeFilled.svg' : '/icons/Like.svg'}
            alt='Иконка лайка'
            className={styles.likeIcon}
            onClick={onLikeClick}
          />
          <h3 className={styles.name}>{user.name}</h3>
          <p className={styles.cityAge}>{ageText}</p>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h4 className={styles.sectionTitle}>Может научить:</h4>
        <div className={styles.skillsRow}>
          {user.skillsToTeach.slice(0, 2).map((skill, index) => {
            const categoryId = getSkillCategory(skill.categoryId, categories);
            const categoryClass = categoryId ? styles[categoryId] : '';
            return (
              <span
                key={index}
                className={`${styles.skillPill} ${categoryClass}`}
              >
                {skill.skill}
              </span>
            );
          })}
          {user.skillsToTeach.length - 2 > 0 && (
            <span className={styles.morePill}>
              +{user.skillsToTeach.length - 2}
            </span>
          )}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h4 className={styles.sectionTitle}>Хочет научиться:</h4>
        <div className={styles.skillsRow}>
          {user.skillsToLearn.slice(0, 2).map((skill, index) => {
            const categoryId = getSkillCategory(skill.categoryId, categories);
            const categoryClass = categoryId ? styles[categoryId] : '';
            return (
              <span
                key={index}
                className={`${styles.skillPill} ${categoryClass}`}
              >
                {skill.skill}
              </span>
            );
          })}
          {user.skillsToLearn.length - 2 > 0 && (
            <span className={styles.morePill}>
              +{user.skillsToLearn.length - 2}
            </span>
          )}
        </div>
      </div>

      <button className={styles.detailsButton} onClick={onMoreClick}>
        Подробнее
      </button>
    </div>
  );
};

export default UserCardUI;

import styles from './UserOfferProfileCard.module.css';
import { getSkillCategory } from '../../../utils/skill-category/getSkillCategory.ts';
import type { TUserOfferProfileCardUI } from './type.ts';

const UserOfferProfileCardUI = ({
  user,
  ageText,
  categories,
  bio
}: TUserOfferProfileCardUI) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userInfoBioContainer}>
        <div className={styles.userInfo}>
          <img
            className={styles.avatar}
            src={`/db/profile-pics/${user.photo}`}
            alt={user.name}
          />
          <div className={styles.userInfoText}>
            <h3 className={styles.name}>{user.name}</h3>
            <p className={styles.cityAge}>{ageText}</p>
          </div>
        </div>
        <span className={styles.bio}>{bio}</span>
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
    </div>
  );
};

export default UserOfferProfileCardUI;

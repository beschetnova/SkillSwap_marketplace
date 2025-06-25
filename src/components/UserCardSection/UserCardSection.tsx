import styles from './UserCardSection.module.scss';
import { UserCard } from '../UserCard/UserCard';
import type { SkillCategories, User } from '../../utils/types.ts';

interface UserCardSectionProps {
  title: string;
  users: User[];
  categories: SkillCategories;
}

export const UserCardSection = ({
  title,
  users,
  categories
}: UserCardSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardsGrid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} categories={categories} />
        ))}
      </div>
    </section>
  );
};

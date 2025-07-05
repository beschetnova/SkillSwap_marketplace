import styles from './UserCardSection.module.css';
import { UserCard } from '../UserCard/UserCard';
import type { SkillCategories, User } from '../../utils/types.ts';
import { useState } from 'react';
import Button from '../ui/buttons/button.tsx';

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
  const [showAll, setShowAll] = useState(false);
  const visibleUsers = showAll ? users : users.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {!showAll && users.length > 3 && (
          <Button
            type='tertiary'
            className={styles.button}
            onClick={handleShowMore}
          >
            Смотреть все
          </Button>
        )}
      </div>
      <div className={styles.cardsGrid}>
        {visibleUsers.map((user) => (
          <UserCard key={user.id} user={user} categories={categories} />
        ))}
      </div>
    </section>
  );
};

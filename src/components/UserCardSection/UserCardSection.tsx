import styles from './UserCardSection.module.css';
import { UserCard } from '../UserCard/UserCard';
import type { UserCardSectionProps } from './types';
import { useState } from 'react';
import Button from '../ui/buttons/button.tsx';

export const UserCardSection = ({
  title,
  users,
  categories,
  toShowAll = false
}: UserCardSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleUsers = toShowAll || showAll ? users : users.slice(0, 3);
  let header = title;

  const handleShowMore = () => {
    setShowAll(true);
  };

  if (title === 'Подходящие предложения') {
    header = `Подходящие предложения: ${users.length}`;
  }
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{header}</h2>
        {!showAll && !toShowAll && users.length > 3 && (
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

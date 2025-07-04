import styles from './UserCardSection.module.css';
import { UserCard } from '../UserCard/UserCard';
import type { UserCardSectionProps } from './types';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/buttons/button.tsx';

export const UserCardSection = ({
  title,
  users,
  categories,
  toShowAll = false
}: UserCardSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(toShowAll ? 9 : 3);
  const [scrollEnabled, setScrollEnabled] = useState(toShowAll);
  const lastCardRef = useRef<HTMLDivElement | null>(null);

  const header =
    title === 'Подходящие предложения'
      ? `Подходящие предложения: ${users.length}`
      : title;

  const handleShowMore = () => {
    setVisibleCount(9);
    setScrollEnabled(true);
  };

  useEffect(() => {
    if (!scrollEnabled || visibleCount >= users.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 9, users.length));
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0
      }
    );

    const node = lastCardRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.disconnect();
    };
  }, [scrollEnabled, visibleCount, users.length]);

  const visibleUsers = users.slice(0, visibleCount);
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{header}</h2>
        {!scrollEnabled && users.length > 3 && (
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
        {visibleUsers.map((user, idx) => (
          <div
            key={user.id}
            ref={idx === visibleUsers.length - 1 ? lastCardRef : null}
          >
            <UserCard user={user} categories={categories} />
          </div>
        ))}
      </div>
    </section>
  );
};

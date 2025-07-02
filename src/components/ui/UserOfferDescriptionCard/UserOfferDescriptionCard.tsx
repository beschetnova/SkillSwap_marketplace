import type { FC } from 'react';
import type { TUserOfferDescriptionCard } from './type';
import styles from './UserOfferDescriptionCard.module.css';

const UserOfferDescriptionCard: FC<TUserOfferDescriptionCard> = ({
  title,
  category,
  description
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerContainer}>
        <h1>{title}</h1>
        <span className={styles.category}>{category}</span>
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default UserOfferDescriptionCard;

import type { FC } from 'react';
import type { TRegistrationVisual } from './type';
import styles from './RegistrationVisual.module.css';

export const RegistrationVisual: FC<TRegistrationVisual> = ({
  step,
  stepContent
}) => {
  const content = stepContent[step];

  return (
    <article className={styles.card}>
      <img
        src={content.image}
        alt={`Изображение: ${content.title}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{content.title}</h2>
      <p className={styles.description}>{content.description}</p>
    </article>
  );
};

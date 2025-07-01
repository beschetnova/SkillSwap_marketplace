import type { FC } from 'react';
import { type TImageWithCount } from './type';
import styles from './ImageWithCount.module.css';

const ImageWithCount: FC<TImageWithCount> = ({ image, count }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageCover}>
        <p>{'+ ' + count}</p>
      </div>
      <img className={styles.image} src={image} />
    </div>
  );
};

export default ImageWithCount;

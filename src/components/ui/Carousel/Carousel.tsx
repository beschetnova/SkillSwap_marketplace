import type { FC } from 'react';
import type { TCarousel } from './type';
import ImageWithCount from './ImageWithCount/ImageWithCount';

import styles from './Carousel.module.css';
import chevronLeft from '../../../images/icons/chevron-left.svg';
import chevronRight from '../../../images/icons/chevron-right.svg';

const Carousel: FC<TCarousel> = ({ images, showArrow = false }) => {
  const mainImage = images[0];
  const nextImages = images.slice(1, 4);
  const otherImagesCount = images.length > 4 ? images.length - 4 : 0;

  const getImageComponent = (
    image: string,
    index: number,
    otherImagesCount: number
  ) => {
    if (otherImagesCount && index === 2) {
      return <ImageWithCount image={image} count={otherImagesCount} />;
    }

    return <img src={image} />;
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.mainImageContainer}>
        {showArrow && (
          <div className={styles.arrowButtons}>
            <div>
              <img src={chevronLeft} />
            </div>
            <div>
              <img src={chevronRight} />
            </div>
          </div>
        )}
        <img
          className={styles.mainImage}
          src={mainImage}
          alt='Главное изображение'
        />
      </div>
      <div className={styles.otherImages}>
        {nextImages.map((image, index) =>
          getImageComponent(image, index, otherImagesCount)
        )}
      </div>
    </div>
  );
};

export default Carousel;

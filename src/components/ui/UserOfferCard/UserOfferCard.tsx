import type { FC } from 'react';
import type { TUserOfferCardUI } from './type';
import UserOfferDescriptionCard from '../UserOfferDescriptionCard/UserOfferDescriptionCard';
import Carousel from '../Carousel/Carousel';
import Button from '../buttons/button';
import moreIcon from '../../../images/icons/more-square.svg';
import likeIcon from '../../../images/icons/like2.svg';
import likeFillIcon from '../../../images/icons/like.svg';
import shareIcon from '../../../images/icons/share.svg';

import styles from './UserOfferCard.module.css';

const UserOfferCardUI: FC<TUserOfferCardUI> = ({
  images,
  title,
  category,
  description,
  isLiked = false,
  onLikeClick,
  onShareClick,
  onMoreClick
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.actions}>
        <img src={isLiked ? likeFillIcon : likeIcon} onClick={onLikeClick} />
        <img src={shareIcon} onClick={onShareClick} />
        <img src={moreIcon} onClick={onMoreClick} />
      </div>
      <div className={styles.content}>
        <div className={styles.descriptionContainer}>
          <UserOfferDescriptionCard
            title={title}
            category={category}
            description={description}
          />
          <Button type={'primary'} className={styles.button}>Предложить обмен</Button>
        </div>
        <Carousel images={images}/>
      </div>
    </div>
  );
};

export default UserOfferCardUI
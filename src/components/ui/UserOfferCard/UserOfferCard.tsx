import { useState, type FC } from 'react';
import type { TUserOfferCardUI } from './type';
import UserOfferDescriptionCard from '../UserOfferDescriptionCard/UserOfferDescriptionCard';
import Carousel from '../Carousel/Carousel';
import Button from '../buttons/button';
import moreIcon from '../../../images/icons/more-square.svg';
import likeIcon from '../../../images/icons/like2.svg';
import likeFillIcon from '../../../images/icons/like.svg';
import shareIcon from '../../../images/icons/share.svg';

import styles from './UserOfferCard.module.css';
import { Modal } from '../../modal/modal';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { proposeExchange } from '../../../services/slices/exchangeSlice';
import { selectProfileId } from '../../../services/slices/profileSlice';
import { useNavigate } from 'react-router-dom';

const UserOfferCardUI: FC<TUserOfferCardUI> = ({
  userId,
  images,
  title,
  category,
  description,
  isLiked = false,
  onLikeClick,
  onShareClick,
  onMoreClick
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isProposed = useAppSelector((state) => state.exchange.proposed[userId]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const fromUserId = useAppSelector(selectProfileId);

  const handleProposeExchange = () => {
    if (isProposed) return;

    if (!fromUserId) {
      navigate('/register', { state: { from: window.location.pathname } });
      return;
    }

    try {
      dispatch(proposeExchange({ fromUserId, toUserId: userId }));
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Ошибка при отправке обмена:', error);
    }
  };

  return (
    <>
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
            <Button
              onClick={handleProposeExchange}
              type='primary'
              className={
                !isProposed
                  ? styles.button
                  : `${styles.button} ${styles.proposeButton}`
              }
            >
              {isProposed && (
                <img
                  src='/clock.svg'
                  alt='clock icon'
                  className={styles.icon}
                />
              )}
              {!isProposed ? 'Предложить обмен' : 'Обмен предложен'}
            </Button>
          </div>
          <Carousel images={images} />
        </div>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        icon='/notification.svg'
        title='Вы предложили обмен'
        message='Теперь дождитесь подтверждения. Вам придёт уведомление'
      />
    </>
  );
};

export default UserOfferCardUI;

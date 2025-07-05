import { useCallback, useEffect } from 'react';
import styles from './OfferModal.module.css';
import type { TOfferModalProps } from './types';
import { UserOfferDescriptionCard } from '../UserOfferDescriptionCard/UserOfferDescriptionCard';
import Carousel from '../Carousel/Carousel.tsx';
import Button from '../buttons/button';

export const OfferModal = ({
  isOpen,
  onClose,
  title,
  category,
  subcategory,
  description,
  images
}: TOfferModalProps) => {
  const handleEscapeClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen, handleEscapeClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Ваше предложение</h2>
          <p className={styles.text}>
            Пожалуйста, проверьте и подтвердите правильность данных
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.descriptionContainer}>
            <UserOfferDescriptionCard
              title={title}
              category={`${category} / ${subcategory}`}
              description={description}
            />
            <div className={styles.buttonsContainer}>
              <Button
                onClick={onClose}
                type={'secondary'}
                className={styles.buttonEdit}
              >
                Редактировать
                <img src='icons/edit.svg' alt='edit icon' />
              </Button>
              <Button
                onClick={onClose}
                type={'primary'}
                className={styles.buttonDone}
              >
                Готово
              </Button>
            </div>
          </div>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

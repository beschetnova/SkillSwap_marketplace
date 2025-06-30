import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ImageDropzone.module.css';
import type { TImageDropzoneProps } from './type';

export const ImageDropzone = ({
  images,
  onDrop,
  onRemove
}: TImageDropzoneProps) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: { 'image/*': [] },
    multiple: true
  });

  return (
    <>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <div className={styles.content}>
          <span>Перетащите или выберите изображения навыка</span>
          <button type='button' className={styles.button}>
            <img
              src='/gallery-add.svg'
              alt='Gallery-add'
              className={styles.icon}
            />
            Выбрать изображения
          </button>
        </div>
      </div>

      {images.length > 0 && (
        <div className={styles.previewList}>
          {images.map((file, idx) => (
            <div key={idx} className={styles.previewItem}>
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                className={styles.previewImage}
              />
              <button
                type='button'
                className={styles.removeButton}
                onClick={() => onRemove(idx)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

import { useRef, useState } from 'react';
import styles from './PhotoUploader.module.css';

type PhotoUploaderProps = {
  onChange: (file: File | null) => void;
  value?: File | null;
};

const PhotoUploader = ({ onChange }: PhotoUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.avatar}>
        {preview ? (
          <img src={preview} alt='preview' className={styles.avatarImage} />
        ) : (
          <img
            src='/icons/user-circle.svg'
            alt='default avatar'
            className={styles.avatarImage}
          />
        )}
        <img src='/icons/Add.svg' alt='add' className={styles.plusIcon} />
      </div>
      <input
        type='file'
        accept='image/png, image/jpeg, image/jpg'
        ref={fileInputRef}
        onChange={handleFileChange}
        // style={{ display: 'none' }}
      />
    </div>
  );
};

export default PhotoUploader;

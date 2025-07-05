import { useRef, useState, useEffect } from 'react';
import styles from './PhotoEditor.module.css';
import Button from '../buttons/button';

interface PhotoEditorProps {
  photo: string;
  setPhoto: (photo: string) => void;
}

export const PhotoEditor: React.FC<PhotoEditorProps> = ({ photo, setPhoto }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(photo || null);

  useEffect(() => {
    setPreview(photo || null);
  }, [photo]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        setPhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {preview ? (
          <img src={preview} alt="preview" className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder}></div>
        )}
      </div>
      <Button type="primary" className={styles.photo_edit_button} onClick={handleClick}>
        <img
          src="src/images/icons/gallery-edit.svg"
          alt="avatar-edit-icon"
          className={styles.icon}
        />
      </Button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default PhotoEditor;

import { memo, useRef, useEffect } from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';
import type { TTextareaProps } from './type';

const Textarea = ({ label, error, info, icon, value, onChange, ...props }: TTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);
    adjustHeight();
  };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={clsx(styles.textareaContainer, error && styles.error, icon && styles.withIcon)}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          {...props}
        ></textarea>
        {icon && (
          <div className={styles.iconWrapper}>
            <img src={icon} alt="icon" />
          </div>
        )}
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
      {!error && info && <p className={styles.infoText}>{info}</p>}
    </div>
  );
};

export default memo(Textarea);

import { memo } from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';
import type { TTextareaProps } from './type';

const Textarea = ({ label, error, info, ...props }: TTextareaProps) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={clsx(styles.textareaContainer, error && styles.error)}>
        <textarea className={styles.textarea} {...props}></textarea>
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
      {!error && info && <p className={styles.infoText}>{info}</p>}
    </div>
  );
};

export default memo(Textarea);

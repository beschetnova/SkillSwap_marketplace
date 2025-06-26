import { memo, type InputHTMLAttributes, type ReactNode } from 'react';
import { useInput } from '../../../hooks/useInput';
import styles from './input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const Input = ({ label, leftIcon, rightIcon, ...props }: InputProps) => {
  // Это по идее должно быть не в инпуте, а в компоненте выше (форме например)
  // const [inputProps, resetTitle] = useInput('');

  // const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     console.log('Поиск:', inputProps.value);
  //   } else if (e.key === 'Escape') {
  //     resetTitle();
  //   }
  // };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input className={styles.input} {...props}></input>
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
    </div>
  );
};

export default memo(Input);

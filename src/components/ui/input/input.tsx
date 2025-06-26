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
    // <label className={styles.search}>
    //   {label}
    //   <input {...props} />
    // </label>
    <div className={styles.search}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <input {...props}></input>
    </div>
  );
};

export default memo(Input);

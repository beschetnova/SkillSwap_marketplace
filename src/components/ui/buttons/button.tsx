import { forwardRef, memo } from 'react';
import styles from './button.module.css';
import type { ButtonProps } from './types';
import clsx from 'clsx';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'primary',
      onClick,
      className = '',
      htmlType = 'button',
      disabled = false,
      children,
      fullWidth = false
    },
    ref
  ) => {
    return (
      <button
        type={htmlType}
        className={clsx(
          `${styles[type]} ${className}`,
          fullWidth && `${styles.fullWidth}`
        )}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default memo(Button);

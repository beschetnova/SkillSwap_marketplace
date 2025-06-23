import { memo } from 'react';
import styles from './button.module.css';
import type { ButtonProps } from './types';

const Button = ({
  type = 'primary',
  onClick,
  className = '',
  htmlType,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      type={htmlType}
      className={`${styles[type]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
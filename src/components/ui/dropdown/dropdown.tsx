import { forwardRef } from 'react';
import type { TDropdownUI } from './type';
import styles from './dropdown.module.css';

export const DropdownUI = forwardRef<HTMLDivElement, TDropdownUI>(
  ({ children, isOpen }, ref) => {
    return (
      <div className={styles.dropdownContainer} ref={ref}>
        {isOpen && children}
      </div>
    );
  }
);

import { type FC, type ReactNode, useEffect, useRef } from 'react';
import useSwitch from '../../hooks/use-switch';
import styles from './dropdown.module.css';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ trigger, children }) => {
  const [isOpen, toggleOpen] = useSwitch(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) toggleOpen();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggleOpen]);

  return (
    <div ref={ref} className={styles.dropdownContainer}>
      <div onClick={toggleOpen} className={styles.trigger}>
        {trigger}
      </div>
      {isOpen && children}
    </div>
  );
};

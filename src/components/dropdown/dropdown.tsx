import { type FC, type ReactNode, useEffect, useRef } from 'react';
import { DropdownUI } from '../ui/dropdown/dropdown';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children, onClose, isOpen }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const targetParent = target.parentElement;
      const classesList: DOMTokenList | undefined = targetParent?.classList;
      let find: boolean = false;
      classesList?.forEach((item) => {
        if (item.includes('buttonSkills')) {
          find = true;
        }
      });

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !find
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <DropdownUI children={children} isOpen={isOpen} dropdownRef={dropdownRef} />
  );
};

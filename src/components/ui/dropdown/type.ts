import type { ReactNode } from 'react';

export type TDropdownUI = {
  children: ReactNode;
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>
};

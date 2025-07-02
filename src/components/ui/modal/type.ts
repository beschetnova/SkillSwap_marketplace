import type { ReactNode } from 'react';

export type TModalUIProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

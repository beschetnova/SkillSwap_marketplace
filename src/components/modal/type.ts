import type { ReactNode } from 'react';

export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon: string;
};

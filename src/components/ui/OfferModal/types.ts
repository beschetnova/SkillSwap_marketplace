export type TOfferModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  images: string[];
};

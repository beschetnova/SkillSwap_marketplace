export type TUserOfferCardUI = {
  userId: string;
  images: string[];
  title: string;
  category: string;
  description: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
  onShareClick?: () => void;
  onMoreClick?: () => void;
  onButtonClick?: () => void;
  isProposed?: boolean;
  onPropose?: () => void;
};

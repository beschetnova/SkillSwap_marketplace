export type TUserOfferCardUI = {
  images: string[];
  title: string;
  category: string;
  description: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
  onShareClick?: () => void;
  onMoreClick?: () => void;
}
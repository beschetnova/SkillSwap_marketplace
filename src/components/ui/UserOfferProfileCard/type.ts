import type { SkillCategories, User } from '../../../utils/types.ts';

export type TUserOfferProfileCardUI = {
  user: User;
  ageText: string;
  categories: SkillCategories;
  bio: string;
};
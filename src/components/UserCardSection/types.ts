import type { SkillCategories, User } from '../../utils/types.ts';

export interface UserCardSectionProps {
  title: string;
  users: User[];
  categories: SkillCategories;
  toShowAll?: boolean;
  onPropose?: () => void;
}

import type { SkillCategory } from '../types.ts';

export const getSkillCategory = (
  categoryId: string,
  categories: SkillCategory[]
): string | null => {
  for (const category of categories) {
    if (category.id === categoryId) {
      return category.id;
    }
  }
  return null;
};

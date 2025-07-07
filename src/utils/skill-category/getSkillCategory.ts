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

export const categoryAndSubcategoryTranslate = (
  categoryId: string,
  subcategoryId: string,
  categories: SkillCategory[]
) => {
  const result = { category: '', subcategory: '' };
  categories.forEach((category) => {
    if (category.id === categoryId) {
      category.skills.forEach((skill) => {
        if (skill.id === subcategoryId) result.subcategory = skill.name;
      });
      result.category = category.name;
    }
  });
  return result;
};

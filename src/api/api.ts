import type { SkillCategories } from '../utils/types';

// const URL = process.env.PUBLIC_URL;

export const getSkill = async (): Promise<SkillCategories> => {
  const response = await fetch(`/db/skills.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить скиллы. ' + response.status);
  }

  const data: SkillCategories = await response.json();
  return data;
};

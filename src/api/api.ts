import type { Cities, SkillCategories, User } from '../utils/types';

// const URL = process.env.PUBLIC_URL;

export const getSkill = async (): Promise<SkillCategories> => {
  const response = await fetch(`/db/skills.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить скиллы. ' + response.status);
  }

  const data: SkillCategories = await response.json();
  return data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`/db/users.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить пользователей. ' + response.status);
  }

  const data: User[] = await response.json();
  return data;
};

export const getCities = async (): Promise<Cities> => {
  const response = await fetch(`/db/cities.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить города. ' + response.status);
  }

  const data: Cities = await response.json();
  return data;
};

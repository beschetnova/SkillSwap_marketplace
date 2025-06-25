import type { Cities, SkillCategories, Users } from '../utils/types';

const URL = '';

export const getSkill = async (): Promise<SkillCategories> => {
  const response = await fetch(`${URL}/db/skills.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить скиллы. ' + response.status);
  }

  const data: SkillCategories = await response.json();
  return data;
};

export const getUsers = async (): Promise<Users> => {
  const response = await fetch(`${URL}/db/users.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить пользователей. ' + response.status);
  }

  const data: Users = await response.json();
  return data;
};

export const getCities = async (): Promise<Cities> => {
  const response = await fetch(`${URL}/db/cities.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить города. ' + response.status);
  }

  const data: Cities = await response.json();
  return data;
};

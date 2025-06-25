import type { Cities, SkillCategories, Users } from '../utils/types';

const URL = '';

export const getSkill = async (): Promise<SkillCategories> => {
  const response = await fetch(`${URL}/db/skills.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить скиллы. ' + response.status);
  }

  const data = (await response.json()) as SkillCategories;
  return data;
};

export const getUsers = async (): Promise<Users> => {
  const response = await fetch(`${URL}/db/users.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить пользователей. ' + response.status);
  }

  const data = (await response.json()) as Users;
  return data;
};

export const getCities = async (): Promise<Cities> => {
  const response = await fetch(`${URL}/db/cities.json`);
  if (!response.ok) {
    throw new Error('Не удалость загрузить города. ' + response.status);
  }

  const data = (await response.json()) as Cities;
  return data;
};

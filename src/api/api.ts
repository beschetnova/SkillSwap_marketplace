import type { Cities, Login, SkillCategories, Users } from '../utils/types';

const URL = '';
const USER_URL = 'db/user.json';

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

export const login = async (
  email: string,
  password: string
): Promise<Login> => {
  const response = await fetch(`${URL}/${USER_URL}`);

  if (!response.ok) {
    throw new Error('Не удалось загрузить пользователя. ' + response.status);
  }

  const user = (await response.json()) as Login;

  if (user.email === email && user.password === password) {
    const token = `mock-token-${user.id}`;

    localStorage.setItem('token', token);
    localStorage.setItem('profile', JSON.stringify(user));

    return user;
  } else {
    throw new Error('Неверный логин или пароль');
  }
};

export const getProfile = () => {
  const token = localStorage.getItem('token');
  const profile = localStorage.getItem('profile');

  if (token && profile) {
    return JSON.parse(profile);
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
};

export type Skill = {
  id: string;
  name: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
};

export type SkillCategories = SkillCategory[];

export type UserCardSkill = {
  skill: string;
  categoryId: string;
  subcategory: string;
  description?: string;
  images?: File[];
};

export type User = {
  id: number;
  name: string;
  city: string;
  gender: string;
  birthDate: string;
  bio: string;
  skillsToTeach: UserCardSkill[];
  skillsToLearn: UserCardSkill[];
  photo: string;
};

export type Profile = User & {
  email: string;
  favorites: number[];
};

export type Users = User[];

export type City = {
  id: number;
  name: string;
};

export type Cities = City[];

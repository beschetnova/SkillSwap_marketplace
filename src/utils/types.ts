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
  images?: string[];
};

export type User = {
  // offer: any;
  id: string;
  name: string;
  city: string;
  gender: string;
  birthDate: string;
  bio?: string;
  skillsToTeach: UserCardSkill[];
  skillsToLearn: UserCardSkill[];
  photo: string;
};

export type Profile = User & {
  email: string;
  favorites: string[];
};

export type Login = Profile & {
  password: string;
};

export type Users = User[];

export type City = {
  id: number;
  name: string;
};

export type Cities = City[];

export type LocationStateType = {
  from?: string;
  showSuccessModal?: boolean;
};

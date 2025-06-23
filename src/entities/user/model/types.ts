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

export type UserCardSkill = {
  skill: string;
  categoryId: string;
  subcategory: string;
};

export type User = {
  id: number;
  name: string;
  city: string;
  age: number;
  bio: string;
  skillsToTeach: UserCardSkill[];
  skillsToLearn: UserCardSkill[];
  photo: string;
};

export type Skill = {
  id: string;
  name: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  skils: Skill[];
};

export type SkillCategories = SkillCategory[];

// TODO: подправить позже на реальный users.json
export type User = {
  name: string;
  city: string;
  age: string;
  description: string;
  skillsCanTeach: Skill[];
  skillsCanLearn: Skill[];
};

export type Users = User[];

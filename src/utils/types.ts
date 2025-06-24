export type SkillSubcategory = {
  id: string;
  name: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  skils: SkillSubcategory[];
};

export type SkillCategories = SkillCategory[];


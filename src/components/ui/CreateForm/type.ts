export type TSkillForm = {
  category: string;
  subcategory: string;
  skillName: string;
  skillDescription: string;
  images: File[];
};

export type TCreateFormProps = {
  createSkill: (skillInfo: TSkillForm) => void;
};

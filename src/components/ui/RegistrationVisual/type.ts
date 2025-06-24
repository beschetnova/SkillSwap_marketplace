export type TStepContent = {
  image: string;
  title: string;
  description: string;
};

export type TRegistrationVisual = {
  step: number;
  stepContent: TStepContent[];
};

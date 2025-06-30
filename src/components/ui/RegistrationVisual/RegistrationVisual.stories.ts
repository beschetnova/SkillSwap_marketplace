import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationVisual } from './RegistrationVisual';
import type { TRegistrationVisual } from './type';

const meta: Meta<typeof RegistrationVisual> = {
  title: 'Components/RegistrationVisual',
  component: RegistrationVisual,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof RegistrationVisual>;

const stepContent: TRegistrationVisual['stepContent'] = [
  {
    image: '/public/light-bulb.svg',
    title: 'Добро пожаловать в SkillSwap!',
    description: 'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
  },
  {
    image: '/public/user info.svg',
    title: 'Расскажите немного о себе',
    description: 'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
  },
  {
    image: '/public/school-board.svg',
    title: 'Укажите, чем вы готовы поделиться',
    description: 'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
  }
];

export const StepOne: Story = {
  args: {
    step: 0,
    stepContent
  }
};

export const StepTwo: Story = {
  args: {
    step: 1,
    stepContent
  }
};

export const StepThree: Story = {
  args: {
    step: 2,
    stepContent
  }
};

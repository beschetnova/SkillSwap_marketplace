import type { Meta, StoryObj } from '@storybook/react-vite';
import { RegistrationVisual } from './RegistrationVisual';

const meta: Meta<typeof RegistrationVisual> = {
  title: 'UI/RegistrationVisual',
  component: RegistrationVisual
};

export default meta;

type Story = StoryObj<typeof RegistrationVisual>;

const mockSteps = [
  {
    image:
      'https://avatars.mds.yandex.net/i?id=d00dfceb78d207f5083f39e32df17838fd4d5487-5390142-images-thumbs&n=13',
    title: 'Добро пожаловать в SkillSwap!',
    description:
      'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
  },
  {
    image: 'http://risovach.ru/upload/2014/06/mem/smayl_52747546_orig_.jpeg',
    title: 'Расскажите немного о себе',
    description:
      'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
  },
  {
    image:
      'https://oktregion.ru/upload/iblock/cc1/043647a9b05561799d45bc5438ec3833_XL.jpg',
    title: 'Укажите, чем вы готовы поделиться',
    description:
      'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
  }
];

export const Default: Story = {
  args: {
    step: 1,
    stepContent: mockSteps
  }
};

export const Step2: Story = {
  args: {
    step: 2,
    stepContent: mockSteps
  }
};

export const Step3: Story = {
  args: {
    step: 3,
    stepContent: mockSteps
  }
};

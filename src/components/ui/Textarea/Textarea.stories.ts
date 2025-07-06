import type { Meta, StoryObj } from '@storybook/react-vite';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Ui/Textarea',
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Описание',
    placeholder: 'Коротко опишите, чему можете научить',
    id: 'textarea-1',
  },
};

export const WithError: Story = {
  args: {
    label: 'Описание',
    error: 'Ошибка: текст ошибки',
    id: 'textarea-2',
  },
};

export const WithInfo: Story = {
  args: {
    label: 'Описание',
    info: 'Подсказка: текст подсказки',
    id: 'textarea-3',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'О себе',
    placeholder: 'Расскажите о себе',
    id: 'textarea-4',
    icon: 'src/images/icons/edit.svg',
  },
};

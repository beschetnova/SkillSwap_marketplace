import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './input.tsx';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  args: {
    id: 'nameInput',
    label: 'Имя',
    type: 'text',
    placeholder: 'Введите ваше имя'
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Имя обязательно для заполнения'
  }
};

export const WithInfo: Story = {
  args: {
    info: 'Укажите полное имя'
  }
};

export const WithIcons: Story = {
  args: {
    rightIcon: <img src='/icons/chevron-down.svg' alt='иконка' width={16} />
  }
};

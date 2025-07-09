import type { Meta, StoryObj } from '@storybook/react-vite';
import PhotoEditor from './PhotoEditor';

const meta: Meta<typeof PhotoEditor> = {
  title: 'Ui/PhotoEditor',
  component: PhotoEditor,
  tags: ['autodocs'],
  args: {
    photo: 'src/images/skills/drums/drum-1.jpg'
  }
};

export default meta;

type Story = StoryObj<typeof PhotoEditor>;

export const Default: Story = {
  render: (args) => <PhotoEditor {...args} />
};

export const WithError: Story = {
  render: (args) => <PhotoEditor {...args} error='Ошибка загрузки фото' />
};

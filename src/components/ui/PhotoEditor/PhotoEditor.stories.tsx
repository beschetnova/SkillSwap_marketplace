import type { Meta, StoryObj } from '@storybook/react-vite';
import PhotoEditor from './PhotoEditor';

const meta: Meta<typeof PhotoEditor> = {
  title: 'Ui/PhotoEditor',
  component: PhotoEditor,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PhotoEditor>;

export const Default: Story = {
  render: () => <PhotoEditor />
};

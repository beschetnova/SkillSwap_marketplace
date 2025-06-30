import type { Meta, StoryObj } from '@storybook/react-vite';
import PhotoUploader from './PhotoUploader';

const meta: Meta<typeof PhotoUploader> = {
  title: 'Ui/PhotoUploader',
  component: PhotoUploader,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PhotoUploader>;

export const Default: Story = {
  render: () => <PhotoUploader />
};

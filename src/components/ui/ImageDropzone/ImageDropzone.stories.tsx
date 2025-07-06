import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ImageDropzone } from './ImageDropzone';

const meta: Meta<typeof ImageDropzone> = {
  title: 'Ui/ImageDropzone',
  component: ImageDropzone,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImageDropzone>;

export const Default: Story = {
  render: () => {
    const [images, setImages] = useState<File[]>([]);

    return (
      <ImageDropzone
        images={images}
        onDrop={(files) => setImages((prev) => [...prev, ...files])}
        onRemove={(index) => setImages((prev) => prev.filter((_, i) => i !== index))}
      />
    );
  },
};

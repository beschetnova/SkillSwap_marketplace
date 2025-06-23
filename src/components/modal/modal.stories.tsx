import { useState } from 'react';
import { Modal } from './modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2>Заголовок</h2>
          <p>Контент модалки</p>
          <button onClick={() => setIsOpen(false)}>Закрыть</button>
        </div>
      </Modal>
    );
  }
};

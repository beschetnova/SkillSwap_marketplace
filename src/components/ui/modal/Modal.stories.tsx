import type { Meta, StoryObj } from '@storybook/react-vite';
import { ModalUI } from './modal';

const meta = {
  title: 'Ui/Modal',
  component: ModalUI,
  tags: ['autodocs']
} satisfies Meta<typeof ModalUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Модалка закрыта'),
    children: (
      <div style={{ padding: '20px' }}>
        <h2>Заголовок модалки</h2>
        <p>Это содержимое модального окна.</p>
      </div>
    )
  }
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfferModal } from './OfferModal';

import testImage1 from '../../../images/skills/drums/drum-1.jpg';
import testImage5 from '../../../images/skills/drums/drum-1.jpg';
import testImage2 from '../../../images/skills/drums/drum-2.jpg';
import testImage3 from '../../../images/skills/drums/drum-3.jpg';
import testImage4 from '../../../images/skills/drums/drum-4.jpg';

const meta = {
  title: 'Ui/OfferModal',
  component: OfferModal,
  tags: ['autodocs']
} satisfies Meta<typeof OfferModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [testImage1, testImage2, testImage3, testImage4, testImage5];

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Модалка закрыта'),
    title: 'Игра на барабанах',
    category: 'Творчество и искусство',
    subcategory: 'Музыка и звук',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры',
    images: items
  }
};

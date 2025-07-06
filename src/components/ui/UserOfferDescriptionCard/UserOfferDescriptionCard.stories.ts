import type { Meta, StoryObj } from '@storybook/react-vite';
import UserOfferDescriptionCard from './UserOfferDescriptionCard';

const meta = {
  title: 'components/UserOfferDescriptionCard',
  component: UserOfferDescriptionCard,
  tags: ['autodocs']
} satisfies Meta<typeof UserOfferDescriptionCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Игра на барабанах',
    category: 'Творчество и искусство / Музыка и звук',
    description:
      'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры'
  }
};

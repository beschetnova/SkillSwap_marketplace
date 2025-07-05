import type { Meta, StoryObj } from '@storybook/react-vite';
import UserOfferProfileCard from './UserOfferProfileCard';
import { mockUsers } from '../../../services/mockStore/mockUsers';
import { mockSkills } from '../../../services/mockStore/mockSkills';

const meta = {
  title: 'components/UserOfferProfileCard',
  component: UserOfferProfileCard,
  tags: ['autodocs']
} satisfies Meta<typeof UserOfferProfileCard>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    user: mockUsers[0],
    categories: mockSkills,
    bio: mockUsers[0].bio,
    ageText: 'Санкт-Петербург, 35 лет',
  }
};




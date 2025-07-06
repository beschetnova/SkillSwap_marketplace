import type { Meta, StoryObj } from '@storybook/react-vite';
import SameOffers from './SameOffers.tsx';
import { Provider } from 'react-redux';
import { store } from '../../services/mockStore/mockStore.ts';
import { mockUsers } from '../../services/mockStore/mockUsers.ts';

const meta: Meta<typeof SameOffers> = {
  title: 'Components/SameOffers',
  component: SameOffers,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SameOffers>;

export const Default: Story = {
  render: () => (
    <Provider store={store}>
      <SameOffers user={mockUsers[0]} />
    </Provider>
  )
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import RegisterFormStepThreeUI from './RegisterFormStepThree';
import { Provider } from 'react-redux';
import store from '../../../services/store.ts';

const meta: Meta<typeof RegisterFormStepThreeUI> = {
  title: 'Forms/RegisterFormStepThree',
  component: RegisterFormStepThreeUI,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof RegisterFormStepThreeUI>;

export const Default: Story = {
  render: () => (
    <Provider store={store}>
      <RegisterFormStepThreeUI />
    </Provider>
  )
};
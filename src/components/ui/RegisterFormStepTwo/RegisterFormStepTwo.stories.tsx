import type { Meta, StoryObj } from '@storybook/react-vite';
import RegisterFormStepTwo from './RegisterFormStepTwo';
import { Provider } from 'react-redux';
import store from '../../../services/store.ts';

const meta: Meta<typeof RegisterFormStepTwo> = {
  title: 'Forms/RegisterFormStepTwo',
  component: RegisterFormStepTwo,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof RegisterFormStepTwo>;

export const Default: Story = {
  render: () => (
    <Provider store={store}>
      <RegisterFormStepTwo onNext={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </Provider>
  )
};

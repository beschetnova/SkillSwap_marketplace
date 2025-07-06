import { RegisterFormStepOneUI } from './RegisterFormStepOne';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof RegisterFormStepOneUI> = {
  title: 'Forms/RegisterFormStepOne',
  component: RegisterFormStepOneUI,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RegisterFormStepOneUI>;

export const Default: Story = {
  render: () => (
    <RegisterFormStepOneUI
      onNext={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  )
};

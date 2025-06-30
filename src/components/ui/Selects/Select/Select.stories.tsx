import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Ui/Selects/Select',
  component: Select,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Select>;

export const GenderSelect: Story = {
  render: () => {
    const [gender, setGender] = useState('');

    return (
      <Select
        id='genderInput'
        label='Пол'
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        options={[
          { value: '', label: 'Не указан' },
          { value: 'male', label: 'Мужской' },
          { value: 'female', label: 'Женский' },
          { value: 'other', label: 'Другое' }
        ]}
        rightIcon={
          <img
            src='/icons/chevron-down.svg'
            alt='Стрелка вниз'
            style={{ width: '16px', height: '16px' }}
          />
        }
      />
    );
  }
};

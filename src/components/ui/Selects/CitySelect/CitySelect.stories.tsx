import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { CitySelect } from './CitySelect.tsx';
import { configureStore } from '@reduxjs/toolkit';

const mockCityReducer = () => ({
  cities: [
    { id: 1, name: 'Москва' },
    { id: 2, name: 'Санкт-Петербург' },
    { id: 3, name: 'Казань' }
  ],
  isLoading: false,
  error: undefined
});

const mockStore = configureStore({
  reducer: {
    cities: mockCityReducer
  }
});

const meta: Meta<typeof CitySelect> = {
  title: 'Ui/Selects/CitySelect',
  component: CitySelect,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CitySelect>;

export const Default: Story = {
  render: () => {
    const [city, setCity] = useState('');

    return (
      <Provider store={mockStore}>
        <CitySelect city={city} setCity={setCity} />
      </Provider>
    );
  }
};

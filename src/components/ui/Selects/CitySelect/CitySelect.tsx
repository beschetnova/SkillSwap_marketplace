import { forwardRef } from 'react';
import { useAppSelector } from '../../../../utils/hooks.ts';
import Select from '../Select/Select.tsx';
import styles from '../../RegisterFormStepTwo/RegisterFormStepTwo.module.css';
import { selectAllCities } from '../../../../services/slices/citiesSlice.ts';

interface CitySelectProps {
  error?: string;
}

export const CitySelect = forwardRef<HTMLSelectElement, CitySelectProps>(
  ({ error, ...props }, ref) => {
    const cities = useAppSelector(selectAllCities);
    const cityOptions = [
      { value: '', label: 'Не указан' },
      ...cities.map((city) => ({
        value: city.name,
        label: city.name
      }))
    ];

    return (
      <Select
        id='cityInput'
        label='Город'
        options={cityOptions}
        ref={ref}
        {...props}
        error={error}
        rightIcon={
          <img
            src='/icons/chevron-down.svg'
            alt='Стрелка вниз'
            className={styles.arrow}
          />
        }
      />
    );
  }
);

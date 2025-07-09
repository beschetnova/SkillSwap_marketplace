import { forwardRef } from 'react';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectAllSkills } from '../../../../services/slices/skillsSlice.ts';
import Select from '../Select/Select.tsx';
import styles from '../../RegisterFormStepTwo/RegisterFormStepTwo.module.css';

interface CategorySelectProps {
  error?: string;
}

export const CategorySelect = forwardRef<
  HTMLSelectElement,
  CategorySelectProps
>(({ error, ...props }, ref) => {
  const skillCategories = useAppSelector(selectAllSkills);

  const skillCategoryOptions = [
    { value: '', label: 'Выберите категорию' },
    ...skillCategories.map((cat) => ({
      value: cat.id,
      label: cat.name
    }))
  ];

  return (
    <Select
      id='categoryInput'
      label='Категория навыка'
      options={skillCategoryOptions}
      ref={ref}
      error={error}
      {...props}
      rightIcon={
        <img
          src='/icons/chevron-down.svg'
          alt='Стрелка вниз'
          className={styles.arrow}
        />
      }
    />
  );
});

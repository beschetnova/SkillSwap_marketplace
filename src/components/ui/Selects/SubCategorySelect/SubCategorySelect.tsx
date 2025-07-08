import { forwardRef } from 'react';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { selectAllSkills } from '../../../../services/slices/skillsSlice.ts';
import Select from '../Select/Select.tsx';
import styles from '../../RegisterFormStepTwo/RegisterFormStepTwo.module.css';

interface SubCategorySelectProps {
  category: string;
  error?: string;
}

export const SubCategorySelect = forwardRef<
  HTMLSelectElement,
  SubCategorySelectProps
>(({ category, error, ...props }, ref) => {
  const skillCategories = useAppSelector(selectAllSkills);

  const selectedCategory = skillCategories.find((cat) => cat.id === category);

  const subcategoryOptions = selectedCategory
    ? [
        { value: '', label: 'Выберите подкатегорию' },
        ...selectedCategory.skills.map((skill) => ({
          value: skill.id,
          label: skill.name
        }))
      ]
    : [{ value: '', label: 'Сначала выберите категорию' }];

  return (
    <Select
      id='subcategoryInput'
      label='Подкатегория навыка'
      options={subcategoryOptions}
      disabled={!category}
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

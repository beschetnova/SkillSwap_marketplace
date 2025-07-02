import type { FiltersState } from '../../../services/slices/filtersSlice';
import type { SkillCategories } from '../../../utils/types';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import FilterNested from '../../FilterNested/FilterNested';
import FilterRadio from '../../FilterRadio/FilterRadio';
import styles from './aside.module.css';

type Props = {
  mainFilter: string[];
  skills: SkillCategories;
  sexFilter: string[];
  cityFilter: string[];
  activeFilters: FiltersState;
  onMainFilterChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onSkillToggle: (id: string) => void;
  onCityToggle: (city: string) => void;
  onMarkCategory: (categoryId: string) => void;   
  onUnmarkCategory: (categoryId: string) => void;
};

const AsideUI = ({
  mainFilter,
  skills,
  sexFilter,
  cityFilter,
  activeFilters,
  onMainFilterChange,
  onGenderChange,
  onSkillToggle,
  onCityToggle,
  onMarkCategory,      
  onUnmarkCategory     
}: Props) => {
  return (
    <aside className={styles.asideContainer}>
      <h2 className={styles.asideTitle}>Фильтры</h2>
      <FilterRadio
        items={mainFilter}
        selectedItem={activeFilters.type}
        handleChange={onMainFilterChange}
      />
      <FilterNested
        items={skills}
        title='Навыки'
        buttonName='Все категории'
        checkedItems={activeFilters.skills}
        toggleSkillCheck={onSkillToggle}
        onMarkCategory={onMarkCategory}
        onUnmarkCategory={onUnmarkCategory}
      />
      <FilterRadio
        items={sexFilter}
        title={'Пол автора'}
        selectedItem={activeFilters.gender}
        handleChange={onGenderChange}
      />
      <FilterCheckbox
        items={cityFilter}
        title='Город'
        buttonName='Все города'
        checkedItems={activeFilters.cities}
        handleCheckBoxChange={onCityToggle}
      />
    </aside>
  );
};

export default AsideUI;

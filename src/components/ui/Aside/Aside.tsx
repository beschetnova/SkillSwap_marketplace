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
};

const AsideUI = ({ mainFilter, skills, sexFilter, cityFilter }: Props) => {
  return (
    <aside className={styles.asideContainer}>
      <h2 className={styles.asideTitle}>Фильтры</h2>
      <FilterRadio items={mainFilter} />
      <FilterNested items={skills} title='Навыки' buttonName='Все категории' />
      <FilterRadio items={sexFilter} title={'Пол автора'} />
      <FilterCheckbox
        items={cityFilter}
        title='Город'
        buttonName='Все города'
      />
    </aside>
  );
};

export default AsideUI;

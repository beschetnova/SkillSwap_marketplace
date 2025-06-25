import type { SkillCategories } from '../../../utils/types';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import FilterNested from '../../FilterNested/FilterNested';
import FilterRadio from '../../FilterRadio/FilterRadio';

type Props = {
  mainFilter: string[];
  skills: SkillCategories;
  sexFilter: string[];
  cityFilter: string[];
};

const AsideUI = ({ mainFilter, skills, sexFilter, cityFilter }: Props) => {
  return (
    <aside>
      <h2>фильтры</h2>
      <FilterRadio items={mainFilter} />
      <FilterNested items={skills} title='навыки' buttonName='все категории' />
      <FilterRadio items={sexFilter} title='пол автора' />
      <FilterCheckbox
        items={cityFilter}
        title='город'
        buttonName='все города'
      />
    </aside>
  );
};

export default AsideUI;

import ListCategory from '../ListCategory/ListCategory';
import styles from './dropSownSkillsList.module.css';
import { toggleSkill, selectFilters} from '../../../../services/slices/filtersSlice';
import { useAppDispatch, useAppSelector} from '../../../../utils/hooks';

interface DropDownSkillsListProps {
  skillsList: Array<{ 
    id: string; 
    name: string; 
    icon: string; 
    skills: Array<{ id: string; name: string }> 
  }>;
}

const DropDownSkillsList: React.FC<DropDownSkillsListProps> = ({ skillsList }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  
  const onSkillClick = (skillId: string) => {
    dispatch(toggleSkill(skillId));
  };

  return (
    <ul className={styles.categoryList}>
      {skillsList.map((item) => (
        <li key={item.id} className={styles.singleCategory}>
          <ListCategory 
            item={item} 
            onSkillClick={onSkillClick}
            activeSkills={filters.skills}
          />
        </li>
      ))}
    </ul>
  );
};

export default DropDownSkillsList;

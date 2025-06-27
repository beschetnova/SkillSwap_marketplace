import { selectAllSkills } from '../../../../services/slices/skillsSlice';
import { useAppSelector } from '../../../../utils/hooks';
import ListCategory from '../ListCategory/ListCategory';
import styles from './dropSownSkillsList.module.css';

const DropDownSkillsList = () => {
  const skillsList = useAppSelector(selectAllSkills);
  return (
    <ul className={styles.categoryList}>
      {skillsList.map((item) => (
        <li key={item.id} className={styles.singleCategory}>
          <ListCategory item={item} />
        </li>
      ))}
    </ul>
  );
};
export default DropDownSkillsList;

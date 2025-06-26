import { selectAllSkills } from '../../../../services/slices/skillsSlice';
import { useAppSelector } from '../../../../utils/hooks';
import ListCategory from '../ListCategory/ListCategory';
import styles from './dropSownSkillsList.module.css';

const DropDownSkillsList = () => {
  const skillsList = useAppSelector(selectAllSkills);
  return (
    <>
      {skillsList.map((item) => (
        <div key={item.id} className={styles.singleCategory}>
          <ListCategory item={item} />
        </div>
      ))}
    </>
  );
};
export default DropDownSkillsList;

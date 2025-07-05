import ListCategory from '../ListCategory/ListCategory';
import styles from './dropSownSkillsList.module.css';

interface DropDownSkillsListProps {
  skillsList: Array<{ id: string; name: string; icon: string; skills: Array<{ id: string; name: string }> }>;
}

const DropDownSkillsList: React.FC<DropDownSkillsListProps> = ({ skillsList }) => {
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

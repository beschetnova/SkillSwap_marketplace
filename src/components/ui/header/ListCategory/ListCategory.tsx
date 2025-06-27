import type { SkillCategory } from '../../../../utils/types';
import ListItem from '../ListItem/ListItem';
import styles from './listCategory.module.css';

type Props = {
  item: SkillCategory;
};
const ListCategory = ({ item }: Props) => {
  return (
    <>
      <div className={styles.categoryIconContainer}>
        <img
          src={`src/images/icons/${item.icon}`}
          className={styles.categoryIcon}
        />
      </div>
      <ul className={styles.categoryList}>
        <h2 className={styles.categoryTitle}>{item.name}</h2>
        {item.skills.map((item) => (
          <li key={item.id} className={styles.categorySubtitle}>
            <ListItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListCategory;

import List from "../../../../List/list";
import Skill from "../../skills/skill/skill";
import styles from './category.module.css';
import { icons } from '../../../../../images/icons/index';

type Props = {
  category: Skills;
}

const Category = ({ category }: Props) => {
  console.log(category)
  const iconSrc = icons[`${category.icon}` as keyof typeof icons];
  return (
    <>
      {iconSrc &&
        <img src={iconSrc} alt={category.title} />
      }
      <h3 className={styles.title}>
        {category.title}
      </h3>
      <List
        list={category.submenu!}
        callback={(skill, index) => (
          <li key={index}>
            <Skill skill={skill} />
          </li>
        )}
        extraStyle={styles.list}
      />
    </>
  );
}

export default Category;
import type { SkillCategory } from '../../../utils/types';
import styles from './filterNested.module.css';
import chevron from '../../../images/icons/chevron-down.svg';
import clsx from 'clsx';
import emptyCheckBox from '../../../images/icons/checkbox-empty.svg';
import filledCheckBox from '../../../images/icons/checkbox-done.svg';

type Props = {
  title?: string;
  items: SkillCategory[];
  checkedItems: string[];
  expandedCategories: string[];
  showAll: boolean;
  toggleShowAll: () => void;
  toggleCategoryExpand: (categoryId: string) => void;
  toggleSkillCheck: (skillId: string) => void;
  buttonName: string;
};

const FilterNestedUI = ({
  title,
  items,
  checkedItems,
  expandedCategories,
  showAll,
  toggleShowAll,
  toggleCategoryExpand,
  toggleSkillCheck,
  buttonName
}: Props) => {
  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <div className={styles.filterContainer}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {visibleItems.map((category) => (
        <ul key={category.id} className={styles.mainList}>
          {/* Категория с кнопкой раскрытия */}
          <li className={styles.mainListPoint}>
            <button onClick={() => toggleCategoryExpand(category.id)}>
              {expandedCategories.includes(category.id) ? '-' : '+'}
            </button>
            <span className={styles.mainListCategory}>{category.name}</span>
          </li>
          {/* Внутри раскрытой категории список навыков */}
          {expandedCategories.includes(category.id) && (
            <ul className={styles.extraList}>
              {category.skills.map((skill) => (
                <li key={skill.id}>
                  <label className={styles.mainListPoint}>
                    <input
                      type='checkbox'
                      checked={checkedItems.includes(skill.id)}
                      onChange={() => toggleSkillCheck(skill.id)}
                      className={styles.checkboxInput}
                    />
                    {!checkedItems.includes(skill.id) && (
                      <img src={emptyCheckBox} />
                    )}
                    {checkedItems.includes(skill.id) && (
                      <img src={filledCheckBox} />
                    )}
                    {skill.name}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
      {items.length > 5 && (
        <button onClick={toggleShowAll} className={styles.bottomButton}>
          {buttonName}
          <img
            src={chevron}
            className={clsx({
              [styles.bottomButtonIcon]: true,
              [styles.bottomButtonIconReverse]: showAll
            })}
          />
        </button>
      )}
    </div>
  );
};

export default FilterNestedUI;

import type { SkillCategory } from '../../../utils/types';
import styles from './filterNested.module.css';
import chevron from '../../../images/icons/chevron-down.svg';
import clsx from 'clsx';
import emptyCheckBox from '../../../images/icons/checkbox-empty.svg';
import filledCheckBox from '../../../images/icons/checkbox-done.svg';
import deleteCheckBox from '../../../images/icons/checkbox-remove.svg';

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
  markSkill: (categoryId: string) => void;
  unMarkSkill: (categoryId: string) => void;
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
  buttonName,
  markSkill,
  unMarkSkill
}: Props) => {
  const visibleItems = showAll ? items : items.slice(0, 5);

  const checkIfChecked = (categoryId: number) => {
    let count = 0;
    items[categoryId].skills.forEach((skill) => {
      if (checkedItems.includes(skill.id)) {
        count++;
      }
    });

    if (count === 0) {
      return -1;
    } else if (count < items[categoryId].skills.length) {
      return 0;
    }
    return 1;
  };

  const unMarkAllCategory = (categoryId: number): void => {
    items[categoryId].skills.forEach((skill) => {
      unMarkSkill(skill.id);
    });
  };

  const markAllCategory = (categoryId: number): void => {
    items[categoryId].skills.forEach((skill) => {
      markSkill(skill.id);
    });
  };

  return (
    <div className={styles.filterContainer}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {visibleItems.map((category, id) => (
        <ul key={category.id} className={styles.mainList}>
          {/* Категория с кнопкой раскрытия */}
          <li className={styles.mainListPoint}>
            <input type='checkbox' className={styles.checkboxInput} />
            {checkIfChecked(id) === -1 && (
              <img
                src={emptyCheckBox}
                onClick={() => {
                  markAllCategory(id);
                }}
              />
            )}
            {checkIfChecked(id) === 0 && (
              <img
                src={deleteCheckBox}
                onClick={() => {
                  unMarkAllCategory(id);
                }}
              />
            )}
            {checkIfChecked(id) === 1 && (
              <img
                src={filledCheckBox}
                onClick={() => {
                  unMarkAllCategory(id);
                }}
              />
            )}
            <span
              className={styles.mainListCategory}
              onClick={() => toggleCategoryExpand(category.id)}
            >
              {category.name}
            </span>
            <img
              src={chevron}
              className={clsx({
                [styles.dNone]: !expandedCategories.includes(category.id),
                [(styles.bottomButtonIconReverse, styles.bottomButtonIcon)]:
                  expandedCategories.includes(category.id)
              })}
            />
          </li>
          {/* Внутри раскрытой категории список навыков */}
          {expandedCategories.includes(category.id) && (
            <ul className={styles.extraList}>
              {category.skills.map((skill) => (
                <li key={skill.id}>
                  <label className={styles.extraListPoint}>
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

import { useState } from 'react';
import type { SkillCategory } from '../../utils/types';
import FilterNestedUI from '../ui/FilterNested/FilterNested';

type Props = {
  title?: string;
  items: SkillCategory[];
  buttonName: string;
};

const FilterNested = ({ title, items, buttonName }: Props) => {
  const [checkedItem, setcheckedItem] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories((prev) => {
      if (prev.includes(categoryId)) {
        // Удаляем из массива
        return prev.filter((id) => id !== categoryId);
      } else {
        // Добавляем в массив
        return [...prev, categoryId];
      }
    });
  };

  const toggleSkillCheck = (skillId: string) => {
    setcheckedItem((prev) => {
      if (prev.includes(skillId)) {
        // Удаляем из массива
        return prev.filter((id) => id !== skillId);
      } else {
        // Добавляем в массив
        return [...prev, skillId];
      }
    });
  };

  const unMarkSkill = (skillId: string) => {
    setcheckedItem((prev) => {
      // Удаляем из массива
      return prev.filter((id) => id !== skillId);
    });
  };

  const markSkill = (skillId: string) => {
    setcheckedItem((prev) => {
      // Добавляем в массив
      return [...prev, skillId];
    });
  };

  return (
    <FilterNestedUI
      title={title}
      items={items}
      checkedItems={checkedItem}
      expandedCategories={expandedCategories}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      toggleCategoryExpand={toggleCategoryExpand}
      toggleSkillCheck={toggleSkillCheck}
      buttonName={buttonName}
      markSkill={markSkill}
      unMarkSkill={unMarkSkill}
    />
  );
};

export default FilterNested;

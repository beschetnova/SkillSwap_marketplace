import { useState } from 'react';
import type { SkillCategory } from '../../utils/types';
import FilterNestedUI from '../ui/FilterNested/FilterNested';

type Props = {
  title?: string;
  items: SkillCategory[];
  buttonName: string;
  checkedItems: string[];
  toggleSkillCheck: (skillId: string) => void;
  onMarkCategory: (categoryId: string) => void;
  onUnmarkCategory: (categoryId: string) => void;
};

const FilterNested = ({
  title,
  items,
  buttonName,
  checkedItems,
  toggleSkillCheck,
  onMarkCategory,
  onUnmarkCategory
}: Props) => {
  // const [checkedItem, setcheckedItem] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // const toggleSkillCheck = (skillId: string) => {
  //   setcheckedItem((prev) => {
  //     if (prev.includes(skillId)) {
  //       // Удаляем из массива
  //       return prev.filter((id) => id !== skillId);
  //     } else {
  //       // Добавляем в массив
  //       return [...prev, skillId];
  //     }
  //   });
  // };

  return (
    <FilterNestedUI
      title={title}
      items={items}
      checkedItems={checkedItems}
      expandedCategories={expandedCategories}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      toggleCategoryExpand={toggleCategoryExpand}
      toggleSkillCheck={toggleSkillCheck}
      buttonName={buttonName}
      onMarkCategory={onMarkCategory}
      onUnmarkCategory={onUnmarkCategory}
    />
  );
};

export default FilterNested;

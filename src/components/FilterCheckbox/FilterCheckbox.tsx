import { useState } from 'react';
import FilterCheckboxUI from '../ui/FilterCheckbox/FilterCheckbox';

type Props = {
  title?: string;
  items: string[];
  buttonName: string;
};

//TODO: Компоненты фильтров довольно похожи, может стоит их объединить, если итоговый компонент будет не слишком огромным

const FilterCheckbox = ({ title, items, buttonName }: Props) => {
  const [checkedItem, setcheckedItem] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const handleCheckboxChange = (item: string) => {
    setcheckedItem((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };
  return (
    <FilterCheckboxUI
      title={title}
      items={items}
      checkedItems={checkedItem}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      handleCheckboxChange={handleCheckboxChange}
      buttonName={buttonName}
    />
  );
};
export default FilterCheckbox;

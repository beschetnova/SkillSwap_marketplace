import { useRef, useState } from 'react';
import FilterRadioUI from '../ui/FilterRadio/FilterRadio';

type Props = {
  title?: string;
  items: string[];
};

const FilterRadio = ({ title, items }: Props) => {
  //изначально выставляем первый выбранный элемент
  const [selectedItem, setselectedItem] = useState<string | null>(items[0]);
  const randomNameRef = useRef<string>(Math.random().toString(36).slice(2, 11));
  const nameAttribute = title ? title : randomNameRef.current;
  const handleChange = (item: string) => {
    setselectedItem(item);
  };
  return (
    <FilterRadioUI
      items={items}
      selectedItem={selectedItem}
      nameAttribute={nameAttribute}
      handleChange={handleChange}
      title={title}
    />
  );
};
export default FilterRadio;

// import styles from './input.module.css';

import { useCallback } from "react";

type Props<T> = {
  type: string;
  name: T;
  value: T;
  selected: T[];
  onChange: React.Dispatch<React.SetStateAction<T[]>>;
  children?: T;
};

const Input = <T extends string>({
  type,
  name,
  value,
  selected,
  onChange,
  children,
}: Props<T>) => {

  const handleCheckboxChange = useCallback(
    (item: T) => {
      onChange((prevItems) =>
        prevItems.includes(item)
          ? prevItems.filter((c) => c !== item)
          : [...prevItems, item]
      );
    }, [onChange]
  );

  const handleOnChange = useCallback(
    (item: T) => {
      const actions: Record<string, () => void> = {
        checkbox: () => handleCheckboxChange(item),
        radio: () => onChange([item]),
      };
      (actions[type] || (() => onChange([item])))();
    },
    [type, onChange, handleCheckboxChange]
  );

  return (
    <label>
      <input
        type={type}
        name={name}
        value={value}
        checked={selected.includes(value)}
        onChange={() => handleOnChange(value)}
      />
      {children}
    </label>
  );
}

export default Input;
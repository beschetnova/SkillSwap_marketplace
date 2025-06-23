import { memo } from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "./input.module.css";

const Input = () => {
  const [inputProps, resetTitle] = useInput('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Поиск:', inputProps.value);
    } else if (e.key === 'Escape') {
      resetTitle();
    }
  };

  return (
    <label
      className={styles.search}
    >
      <input
        name='search'
        type='text'
        {...inputProps}
        onKeyDown={handleSearch}
        placeholder='Искать навыки'
      />
    </label>
  )
}

export default memo(Input);
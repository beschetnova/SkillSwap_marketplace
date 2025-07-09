import type { ActiveFilterProps } from './types';
import styles from './ActiveFilters.module.css';
import icon from '../../../images/icons/cross.svg';
import Button from '../buttons/button';

export const ActiveFilters = ({ filters, onRemoveTag }: ActiveFilterProps) => {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => onRemoveTag(filter)}
          type='tertiary'
        >
          {filter.label}
          <img src={icon} alt='Удалить фильтр' className={styles.icon} />
        </Button>
      ))}
    </div>
  );
};

import { useMemo, type ReactNode } from 'react';
import List from '../List/list';
import styles from './filter-section.module.css';
import useSwitch from '../../../hooks/use-switch';

type Props<T> = {
  title: string;
  list: T[];
  renderItem: (item: T) => ReactNode;
  limit?: number;
  buttonShow?: string;
  buttonHide?: string;
  extraStyle?: string;
};

const FilterSection = <T,>(
  {
    title,
    list,
    renderItem,
    limit,
    buttonShow,
    buttonHide,
    extraStyle,
  }: Props<T>
) => {
  const [open, toggleOpen] = useSwitch();

  const listToShow = useMemo(
    () => open ? list : list.slice(0, limit),
    [list, limit, open]
  );

  return (
    <section
      className={extraStyle}
    >
      <h3
        className={styles.title}
      >
        {title}
      </h3>
      <List
        list={listToShow}
        callback={renderItem}
      />
      {typeof limit === 'number' && list.length > limit && (
        <button
          type='button'
          onClick={toggleOpen}
        >
          {open ? buttonHide : buttonShow}
        </button>
      )}
    </section>
  );
}

export default FilterSection;
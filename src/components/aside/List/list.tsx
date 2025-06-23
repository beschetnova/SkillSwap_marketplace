import { memo, useMemo } from 'react';
import styles from './list.module.css';

interface ListProps<T> {
  list: T[];
  callback: (item: T, index: number, array: T[]) => React.ReactNode;
  extraStyle?: string;
}

const List = <T,>({ list, callback, extraStyle }: ListProps<T>) => {
  const rootStyle = useMemo(
    () => [styles.list, extraStyle].filter(Boolean).join(' '),
    [extraStyle]
  );

  return (
    <ul className={rootStyle}>
      {list.map(callback)}
    </ul>
  );
};

export default memo(List) as <T>(
  props: ListProps<T>
) => ReturnType<typeof List>;
import { memo, useState } from 'react';
import searchIcon from './../../../../images/icons/search2.svg';
import Input from '../../input/input.tsx';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import { setSearchFilter } from '../../../../services/slices/filtersSlice.ts';

export const SearchInput = memo(() => {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(setSearchFilter(e.target.value));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Поиск:', search);
    }
  };

  return (
    <Input
      leftIcon={<img src={searchIcon} alt='поиск' />}
      id='search-skills'
      placeholder='Искать навык'
      onInput={handleSearch}
      value={search}
      type='search'
      onKeyDown={handleEnter}
    />
  );
});

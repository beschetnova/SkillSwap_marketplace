import { useState } from 'react';
import styles from './header.module.css';
import Nav from './nav/nav';
import AuthButtons from './auth-buttons/authButtons';
import Icons from './icons/icons';
import Logo from '../logo/logo';
import Input from '../input/input';
import Profile from './profile/profile';
import searchIcon from './../../../images/icons/search2.svg';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Поиск:', search);
    }
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Input
        leftIcon={<img src={searchIcon}></img>}
        id='search-skills'
        placeholder='Искать навык'
        onInput={handleSearch}
        value={search}
        type='search'
        onKeyDown={handleEnter}
      />
      <Icons isAuth={isAuth} />
      {isAuth ? <Profile /> : <AuthButtons setIsAuth={setIsAuth} />}
    </header>
  );
};

export default Header;

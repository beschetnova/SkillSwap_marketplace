import { useState } from 'react';
import styles from './header.module.css';
import Nav from './nav/nav';
import AuthButtons from './auth-buttons/authButtons';
import Icons from './icons/icons';
import Logo from '../logo/logo';
import Profile from './profile/profile';
import { SearchInput } from './SearchInput/SearchInput.tsx';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <SearchInput />
      <Icons isAuth={isAuth} />
      {isAuth ? (
        <Profile profileIcon='/db/profile-pics/Maria-Moscow.png' />
      ) : (
        <AuthButtons setIsAuth={setIsAuth} />
      )}
    </header>
  );
};

export default Header;

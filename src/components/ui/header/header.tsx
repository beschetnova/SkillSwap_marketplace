import { useState } from 'react';
import styles from './header.module.css';
import Nav from './nav/nav';
import AuthButtons from './auth-buttons/authButtons';
import Icons from './icons/icons';
import Logo from '../logo/logo';
import Input from '../input/input';
import Profile from './profile/profile';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Input placeholder='Искать навык' type='text' />
      <Icons isAuth={isAuth} />
      {isAuth ? <Profile /> : <AuthButtons setIsAuth={setIsAuth} />}
    </header>
  );
};

export default Header;

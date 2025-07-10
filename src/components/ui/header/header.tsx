import styles from './header.module.css';
import Nav from './nav/nav';
import AuthButtons from './auth-buttons/authButtons';
import Icons from './icons/icons';
import Logo from '../logo/logo';
import Profile from './profile/profile';
import { SearchInput } from './SearchInput/SearchInput.tsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectProfile
} from '../../../services/slices/profileSlice.ts';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const profile = useSelector(selectProfile);

  return (
    <header className={styles.header}>
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <Nav />
      <SearchInput />
      <Icons isAuth={isAuth} />
      {isAuth && profile ? (
        <Profile
          userName={profile.name ?? 'Имя пользователя'}
          profileIcon={profile.photo ?? ''}
        />
      ) : (
        <AuthButtons />
      )}
    </header>
  );
};

export default Header;

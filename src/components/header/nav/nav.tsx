import React from 'react';
import styles from './nav.module.css';
import searchIcon from '../../../images/header-image/search.svg';
import skillsIcon from '../../../images/header-image/dropdown.svg';
import Logo from '../logo/logo';
import { useInput } from '../../../hooks/useInput';

const Nav = () => {
  const [inputProps, resetTitle] = useInput('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Поиск:', inputProps.value);
    } else if (e.key === 'Escape') {
      resetTitle();
    }
  };

  const handleSkillsClick = () => {

    console.log('Клик по кнопке Навыки');
  };

  return (
    <div className={styles.nav}>
      <Logo />
      <a href='/' className={styles.about}>О проекте</a>
      <button className={styles.skills} onClick={handleSkillsClick}>
        <p>Навыки</p>
        <img src={skillsIcon} alt='' />
      </button>
      <div className={styles.search}>
        <img src={searchIcon} alt='Иконка поиска' />
        <input
          type='text'
          {...inputProps}
          onKeyDown={handleSearch}
          placeholder='Искать навыки' />
      </div>
    </div>
  );
};

export default Nav;
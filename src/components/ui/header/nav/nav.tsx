import { memo, useState } from 'react';
import skillsIcon from '../../../../images/icons/chevron-down.svg';
import Button from '../../../ui/buttons/button';
import styles from './nav.module.css';
import DropDownSkillsList from '../DropDownSkillsList/DropDownSkillsList';
import { Dropdown } from '../../../dropdown/dropdown';

const Nav = () => {
  //TODO: сейчас при открытом дропдауне если нажать на кнопку навыков, то дропдаун мигает. Пока не знаю как исправить
  const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleToggle = () => {
    setDropdownOpen(prev => !prev);
  };
    const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={styles.nav}
    >
      <Button
        type='tertiary'
        htmlType='button'
        className={styles.button}
      >
        О проекте
      </Button>
      <Button
        type='tertiary'
        htmlType='button'
        className={`${styles.button} ${styles.buttonSkills}`}
        onClick={handleToggle}
      >
        <span>Навыки</span>
        <img src={skillsIcon} alt='Иконка' />
      </Button>
        <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown}>
          <DropDownSkillsList/>
        </Dropdown>
    </div>
  );
};

export default memo(Nav);
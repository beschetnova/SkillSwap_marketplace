import { memo, useState } from 'react';
import { useAppSelector } from '../../../../utils/hooks';

import styles from './nav.module.css';

import { selectAllSkills } from '../../../../services/slices/skillsSlice';
import skillsIcon from '../../../../images/icons/chevron-down.svg';
import Button from '../../../ui/buttons/button';
import DropDownSkillsList from '../DropDownSkillsList/DropDownSkillsList';
import { Dropdown } from '../../../dropdown/dropdown';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const skills = useAppSelector(selectAllSkills);

  const handleToggle = () => {
    setDropdownOpen((prev) => !prev);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className={styles.nav}>
      <Button type='tertiary' htmlType='button' className={styles.button}>
        О проекте
      </Button>
      <Button
        type='tertiary'
        htmlType='button'
        className={`${styles.button} ${styles.buttonSkills}`}
        onClick={handleToggle}
      >
        <span>Все навыки</span>
        <img src={skillsIcon} alt='Иконка' />
      </Button>
      {isDropdownOpen && (
        <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown}>
          <DropDownSkillsList skillsList={skills} />
        </Dropdown>
      )}
    </div>
  );
};

export default memo(Nav);

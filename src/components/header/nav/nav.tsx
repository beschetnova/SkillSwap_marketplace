import { memo } from 'react';
import skillsIcon from '../../../images/icons/chevron-down.svg';
import Button from '../../ui/buttons/button';
import styles from './nav.module.css';

const Nav = () => {

  const handleSkillsClick = () => {
    console.log('Клик по кнопке Навыки');
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
        className={styles.button}
        onClick={handleSkillsClick}
      >
        <span>Навыки</span>
        <img src={skillsIcon} alt='Иконка' />
      </Button>
    </div>
  );
};

export default memo(Nav);
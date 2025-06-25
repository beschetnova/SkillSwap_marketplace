import { memo, useRef, useState } from 'react';
import skillsIcon from '../../../../images/icons/chevron-down.svg';
import Button from '../../../ui/buttons/button';
import styles from './nav.module.css';
import useSwitch from '../../../../hooks/use-switch';
import Modal from '../../../modal/modal';
import Skills from '../skills/skills';

const Nav = () => {
  const [open, toggle] = useSwitch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });


  const handleClick = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY, // 10px padding
      left: rect.left + window.scrollX
    });
    toggle();
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
        onClick={handleClick}
        ref={buttonRef}
      >
        <span>Навыки</span>
        <img src={skillsIcon} alt='Иконка' />
      </Button>
      {open &&
        <Modal 
        isOpen={open}
        onClose={toggle}
        position={position}
        >
          <Skills />
        </Modal>
      }
    </div>
  );
};

export default memo(Nav);
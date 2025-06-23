import styles from './logo.module.css';
import logoImage from '../../../images/logo.svg';
import Button from '../../ui/buttons/button';
import { memo } from 'react';

const Logo = () => {
  return (
    <div>
      <Button
        type='tertiary'
        htmlType='button'
        className={styles.logo}
      >
        <img src={logoImage} alt='Логотип' />
      </Button>
    </div>
  );
};

export default memo(Logo);
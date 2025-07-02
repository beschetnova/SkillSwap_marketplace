import logoImage from '../../../images/logo.svg';
import { memo } from 'react';

const Logo = () => {
  return <img src={logoImage} alt='Логотип' />;
};

export default memo(Logo);

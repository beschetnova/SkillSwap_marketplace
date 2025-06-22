import styles from './logo.module.css';
import logoImage from '../../../images/header-image/logo.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <a href="/" className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
        <h1 className={styles.logoText}>SkillSwap</h1>
      </a>
    </div>
  );
};

export default Logo;
import styles from './footer.module.css';
import Logo from '../logo/logo';

const FooterUI = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.menu_left_part}>
                <Logo />
                <div className={styles.copyright}>
                    SkillSwap — 2025
                </div>
            </div>
            <div className={styles.menu_right_part}>
                <div className={styles.menu_column}>
                    <span>О проекте</span>
                    <span>Все навыки</span>
                </div>
                <div className={styles.menu_column}>
                    <span>Контакты</span>
                    <span>Блог</span>
                </div>
                <div className={styles.menu_column}>
                    <span>Политика конфиденциальности</span>
                    <span>Пользовательское соглашение</span>
                </div>
            </div>
        </footer>
    );
};

export default FooterUI;
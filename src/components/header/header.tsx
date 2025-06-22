import { useState } from 'react';
import styles from './header.module.css'
import Nav from './nav/nav';
import Profile from './profile/profile';
import AuthButtons from './auth-buttons/authButtons';

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <header className={styles.header}>
            <Nav />
            <div className={styles.right}>
                {isAuth ? <Profile /> : <AuthButtons setIsAuth={setIsAuth} />}
            </div>
        </header>
    );
}

export default Header;
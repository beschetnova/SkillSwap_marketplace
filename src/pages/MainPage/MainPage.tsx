// import { UserCardSection } from "../UserCardSection/UserCardSection";
import Aside from '../../components/aside/aside.tsx';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/ui/header/header.tsx';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Aside />
        {/* <UserCardSection /> // Не знаю откуда взять пропсы для UserCardSection */}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;

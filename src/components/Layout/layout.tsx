// import { UserCardSection } from "../UserCardSection/UserCardSection";
import Aside from "../aside/aside";
import Footer from "../footer/footer";
import Header from "../ui/header/header";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main
        className={styles.main}
      >
        <Aside />
        {/* <UserCardSection /> // Не знаю откуда взять пропсы для UserCardSection */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
// import { UserCardSection } from "../UserCardSection/UserCardSection";
import Aside from '../../components/aside/aside.tsx';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/ui/header/header.tsx';
import { UserCardSection } from '../../components/UserCardSection/UserCardSection.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { selectAllSkills } from '../../services/slices/skillsSlice';
import { selectAllUsers } from '../../services/slices/usersSlice.ts';
import styles from './MainPage.module.css';

const MainPage = () => {

  const skills = useAppSelector(selectAllSkills);
  const users = useAppSelector(selectAllUsers);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Aside />
        <UserCardSection title='Рекомендуем' users={users} categories={skills} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;

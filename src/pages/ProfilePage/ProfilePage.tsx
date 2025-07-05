import styles from './ProfilePage.module.css';
import ProfileSidebar from '../../components/ui/ProfileSidebar/ProfileSidebar';
import ProfileInfo from '../../components/ui/ProfileInfo/ProfileInfo';

const ProfilePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ProfileSidebar />
        <ProfileInfo />
      </div>
    </main>
    );
};

export default ProfilePage;
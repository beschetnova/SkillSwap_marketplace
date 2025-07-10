import { useAppSelector } from '../../utils/hooks.ts';
import { selectFavorites } from '../../services/slices/profileSlice.ts';
import { selectAllUsers } from '../../services/slices/usersSlice.ts';
import { UserCardSection } from '../../components/UserCardSection/UserCardSection.tsx';
import { selectAllSkills } from '../../services/slices/skillsSlice.ts';
import styles from './FavoritesPage.module.css';
import Button from '../../components/ui/buttons/button.tsx';
import icon from '../../images/icons/like2.svg';
import { Link } from 'react-router-dom';
import PathConstants from '../../routes/path-constants.ts';

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);
  const allUsers = useAppSelector(selectAllUsers);

  const favoriteUsers = allUsers.filter((user) => favorites.includes(user.id));
  const categories = useAppSelector(selectAllSkills);
  const hasUsers = favoriteUsers.length !== 0;

  return (
    <main className={styles.favorites}>
      {!hasUsers && (
        <div className={styles.empty}>
          <img className={styles.icon} src={icon} alt='Icon' />
          <div className={styles.description}>
            <h2>В избранных никого нет</h2>
            <p>Добавьте в избранные пользователей с главной страницы</p>
          </div>
          <Link to={PathConstants.HOME}>
            <Button fullWidth={true} type='primary'>
              На главную страницу
            </Button>
          </Link>
        </div>
      )}
      {hasUsers && <UserCardSection
        title='Избранное'
        users={favoriteUsers}
        categories={categories}
        toShowAll={true}
      /> }
    </main>
  );
};

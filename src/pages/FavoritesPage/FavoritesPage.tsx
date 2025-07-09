import { useAppSelector } from '../../utils/hooks.ts';
import { selectFavorites } from '../../services/slices/profileSlice.ts';
import { selectAllUsers } from '../../services/slices/usersSlice.ts';
import { UserCardSection } from '../../components/UserCardSection/UserCardSection.tsx';
import { selectAllSkills } from '../../services/slices/skillsSlice.ts';

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);
  const allUsers = useAppSelector(selectAllUsers);

  const favoriteUsers = allUsers.filter((user) => favorites.includes(user.id));
  const categories = useAppSelector(selectAllSkills);

  return (
    <UserCardSection
      title='Избранное'
      users={favoriteUsers}
      categories={categories}
      toShowAll={true}
    />
  );
};

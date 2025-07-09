import UserCardUI from '../ui/UserCard/UserCardUI';
import { calculateAge, getYearsWord } from '../../utils/date/dateUtils.ts';
import type { SkillCategories, User } from '../../utils/types.ts';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import {
  selectFavorites,
  toggleFavorite
} from '../../services/slices/profileSlice.ts';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
  categories: SkillCategories;
}

export const UserCard = ({ user, categories }: UserCardProps) => {
  const navigate = useNavigate();

  const age = calculateAge(user.birthDate);
  const ageText = `${user.city}, ${age} ${getYearsWord(age)}`;

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const liked = favorites.includes(user.id);

  const handleLike = () => {
    dispatch(toggleFavorite(user.id));
  };

  const handleMoreClick = () => {
    console.log(`Подробнее о пользователе ${user.name}`);
    navigate(`/skill/${user.id}`);
  };

  return (
    <UserCardUI
      user={user}
      ageText={ageText}
      liked={liked}
      categories={categories}
      onLikeClick={handleLike}
      onMoreClick={handleMoreClick}
    />
  );
};

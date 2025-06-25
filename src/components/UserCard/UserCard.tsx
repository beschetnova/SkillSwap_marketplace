import { useState } from 'react';
import UserCardUI from '../ui/UserCard/UserCardUI';
import { calculateAge, getYearsWord } from '../../utils/date/dateUtils.ts';
import type { SkillCategories, User } from '../../utils/types.ts';

interface UserCardProps {
  user: User;
  categories: SkillCategories;
}

//TODO : получать категории внутри UserList const categories = useCategories();

export const UserCard = ({ user, categories }: UserCardProps) => {
  const [liked, setLiked] = useState(false);

  const age = calculateAge(user.birthDate);
  const ageText = `${user.city}, ${age} ${getYearsWord(age)}`;

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleMoreClick = () => {
    console.log(`Подробнее о пользователе ${user.name}`);
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

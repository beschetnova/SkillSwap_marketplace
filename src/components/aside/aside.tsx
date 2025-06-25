import { selectAllSkills } from '../../services/slices/skillsSlice';
import { selectAllUsersCity } from '../../services/slices/usersSlice';
import { useAppSelector } from '../../utils/hooks';
import AsideUI from '../ui/Aside/Aside';

const Aside = () => {
  const mainFilter = ['Всё', 'Хочу научиться', 'Могу научить'];
  const sexFilter = ['Не имеет значения', 'Мужской', 'Женский'];
  const cityFilter = useAppSelector(selectAllUsersCity);

  const skills = useAppSelector(selectAllSkills);

  return (
    <AsideUI
      mainFilter={mainFilter}
      skills={skills}
      sexFilter={sexFilter}
      cityFilter={cityFilter}
    />
  );
};
export default Aside;

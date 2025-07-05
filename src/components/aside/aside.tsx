import {
  markCategorySkills,
  selectFilters,
  setGender,
  setType,
  toggleCity,
  toggleSkill,
  unmarkCategorySkills
} from '../../services/slices/filtersSlice';
import { selectAllSkills } from '../../services/slices/skillsSlice';
import { selectAllUsersCity } from '../../services/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import AsideUI from '../ui/Aside/Aside';

const Aside = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const mainFilter = ['Всё', 'Хочу научиться', 'Могу научить'];
  const sexFilter = ['Не имеет значения', 'Мужской', 'Женский'];
  const cityFilter = useAppSelector(selectAllUsersCity);
  const skills = useAppSelector(selectAllSkills);

  const handleMainFilterChange = (value: string) => {
    dispatch(setType(value));
  };

  const handleGenderChange = (value: string) => {
    dispatch(setGender(value));
  };

  const handleSkillToggle = (skillId: string) => {
    dispatch(toggleSkill(skillId));
  };

  const handleCityToggle = (city: string) => {
    dispatch(toggleCity(city));
  };

  const handleMarkCategory = (categoryId: string) => {
    const category = skills.find((c) => c.id === categoryId);
    if (category) {
      const skillIds = category.skills.map((s) => s.id);
      dispatch(markCategorySkills(skillIds));
    }
  };

  const handleUnmarkCategory = (categoryId: string) => {
    const category = skills.find((c) => c.id === categoryId);
    if (category) {
      const skillIds = category.skills.map((s) => s.id);
      dispatch(unmarkCategorySkills(skillIds));
    }
  };

  return (
    <AsideUI
      mainFilter={mainFilter}
      skills={skills}
      sexFilter={sexFilter}
      cityFilter={cityFilter}
      activeFilters={filters}
      onMainFilterChange={handleMainFilterChange}
      onGenderChange={handleGenderChange}
      onSkillToggle={handleSkillToggle}
      onCityToggle={handleCityToggle}
      onMarkCategory={handleMarkCategory}
      onUnmarkCategory={handleUnmarkCategory}
    />
  );
};
export default Aside;

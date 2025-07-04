// import { UserCardSection } from "../UserCardSection/UserCardSection";
import { selectAllSkills } from '../../services/slices/skillsSlice';
import { selectAllUsers } from '../../services/slices/usersSlice.ts';
import { selectFilters } from '../../services/slices/filtersSlice.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { useMemo } from 'react';
import { UserCardSection } from '../../components/UserCardSection/UserCardSection.tsx';
import Aside from '../../components/aside/aside.tsx';
import styles from './MainPage.module.css';
import type { User } from '../../utils/types.ts';

const MainPage = () => {
  const skills = useAppSelector(selectAllSkills);
  const users = useAppSelector(selectAllUsers);
  const filters = useAppSelector(selectFilters);

  const filteredUsers = useMemo(() => {
    return users.filter((user: User) => {
      if (filters.gender !== 'Не имеет значения') {
        const genderMap: { [key: string]: string } = {
          Мужской: 'male',
          Женский: 'female'
        };
        if (user.gender !== genderMap[filters.gender]) {
          return false;
        }
      }

      if (filters.cities.length > 0 && !filters.cities.includes(user.city)) {
        return false;
      }

      if (filters.skills.length > 0) {
        const skillsToTeachIds = user.skillsToTeach.map((s) => s.subcategory);
        const skillsToLearnIds = user.skillsToLearn.map((s) => s.subcategory);

        const hasSkill = (skillId: string) =>
          skillsToTeachIds.includes(skillId) ||
          skillsToLearnIds.includes(skillId);

        const hasSkillToTeach = (skillId: string) =>
          skillsToTeachIds.includes(skillId);

        const hasSkillToLearn = (skillId: string) =>
          skillsToLearnIds.includes(skillId);

        switch (filters.type) {
          case 'Могу научить':
            if (!filters.skills.some(hasSkillToTeach)) {
              return false;
            }
            break;
          case 'Хочу научиться':
            if (!filters.skills.some(hasSkillToLearn)) {
              return false;
            }
            break;
          case 'Всё':
          default:
            if (!filters.skills.some(hasSkill)) {
              return false;
            }
            break;
        }
      }

      // Если все проверки пройдены, пользователь подходит
      return true;
    });
  }, [users, filters]);

  return (
    <>
      <main className={styles.main}>
        <Aside />
        <UserCardSection
          title='Рекомендуем'
          users={filteredUsers}
          categories={skills}
        />
      </main>
    </>
  );
};

export default MainPage;

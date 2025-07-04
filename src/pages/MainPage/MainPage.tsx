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
import { OfferModal } from '../../components/ui/OfferModal/OfferModal.tsx';

import testImage1 from '../../images/skills/drums/drum-1.jpg';
import testImage5 from '../../images/skills/drums/drum-1.jpg';
import testImage2 from '../../images/skills/drums/drum-2.jpg';
import testImage3 from '../../images/skills/drums/drum-3.jpg';
import testImage4 from '../../images/skills/drums/drum-4.jpg';

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

  const items = [testImage1, testImage2, testImage3, testImage4, testImage5];

  return (
    <>
      <main className={styles.main}>
        <Aside />
        <UserCardSection
          title='Рекомендуем'
          users={filteredUsers}
          categories={skills}
        />
        <OfferModal
          isOpen={true}
          onClose={() => {}}
          title={'Игра на барабанах'}
          category={'Творчество и искусство'}
          subcategory={'Музыка и звук'}
          description={
            'Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры'
          }
          images={items}
        />
      </main>
    </>
  );
};

export default MainPage;

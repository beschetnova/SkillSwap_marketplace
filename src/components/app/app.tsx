import UserCard from '../../entities/user/ui/user-card/UserCard.tsx';
import { useState } from 'react';
import Aside from '../aside/aside';

function App() {
  const [bases, setBases] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [autors, setAuthors] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const filters = {
    bases,
    setBases,
    skills,
    setSkills,
    autors,
    setAuthors,
    cities,
    setCities
  };
  return (
    <>
      <Aside filters={filters} />
      <UserCard
        user={{
          id: 1,
          name: 'Иван',
          city: 'Санкт-Петербург',
          gender: 'male',
          birthDate: '1990-06-23',
          bio: 'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
          skillsToTeach: [
            {
              skill: 'Игра на барабанах',
              categoryId: 'creativity-and-art',
              subcategory: 'music-and-sound'
            }
          ],
          skillsToLearn: [
            {
              skill: 'Тайм менеджмент',
              categoryId: 'business-and-career',
              subcategory: 'time-management'
            },
            {
              skill: 'Медитация',
              categoryId: 'health-and-lifestyle',
              subcategory: 'yoga-and-meditation'
            },
            {
              skill: 'Фотография',
              categoryId: 'creativity-and-art',
              subcategory: 'photography'
            },
            {
              skill: 'Видеомонтаж',
              categoryId: 'creativity-and-art',
              subcategory: 'video-editing'
            }
          ],
          photo: 'Ivan.png'
        }}
      />
    </>
  );
}

export default App;

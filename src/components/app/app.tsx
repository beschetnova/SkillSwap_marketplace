<<<<<<< HEAD
import styles from './app.module.css';
import UserCard from '../../entities/user/ui/user-card/UserCard.tsx';
=======
import { useState } from 'react';
import Aside from '../aside/aside';
// import styles from './app.module.css';
>>>>>>> 837563ffd4ce920fdd71961f20e94f487bd01fb7

function App() {
  const [bases, setBases] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [autors, setAuthors] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const filters = {
    bases, setBases,
    skills, setSkills,
    autors, setAuthors,
    cities, setCities,
  };
  return (
<<<<<<< HEAD
    <>
      <p className={styles.p}>SkillSwap project</p>

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
              skill: 'Тайм менеджмент',
              categoryId: 'business-and-career',
              subcategory: 'time-management'
            },
            {
              skill: 'Тайм менеджмент',
              categoryId: 'business-and-career',
              subcategory: 'time-management'
            }
          ],
          photo: 'Ivan.png'
        }}
      />
    </>
=======
    <Aside filters={filters} />
>>>>>>> 837563ffd4ce920fdd71961f20e94f487bd01fb7
  );
}

export default App;

import styles from './app.module.css';
import UserCard from '../../entities/user/ui/user-card/UserCard.tsx';

function App() {
  return (
    <>
      <p className={styles.p}>SkillSwap project</p>

      <UserCard
        user={{
          id: 1,
          name: 'Иван',
          city: 'Санкт-Петербург',
          age: 34,
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
  );
}

export default App;

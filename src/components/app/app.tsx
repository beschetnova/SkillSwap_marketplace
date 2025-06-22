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
          bio: 'Музыкант с 10-летним стажем, учу игре на народных инструментах',
          skillsToTeach: ['Игра на борьбанах'],
          skillsToLearn: [
            'Тайм-менеджмент',
            'Медитация',
            'Фотография',
            'Видеомонтаж'
          ]
        }}
      />
    </>
  );
}

export default App;

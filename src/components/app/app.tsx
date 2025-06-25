import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../Aside/Aside';
import { UserCardSection } from '../UserCardSection/UserCardSection.tsx';
import { useCategories } from '../../utils/skill-category/useCategories.ts';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchUsers());
  }, []);

  const categories = useCategories();

  return (
    <>
      <Aside />
      <UserCardSection
        title={'Популярное'}
        users={[
          {
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
          },
          {
            id: 2,
            name: 'Анна',
            city: 'Казань',
            gender: 'female',
            birthDate: '1990-06-23',
            bio: 'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
            skillsToTeach: [
              {
                skill: 'Английский язык',
                categoryId: 'foreign-languages',
                subcategory: 'english'
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
            photo: 'Anna.png'
          },
          {
            id: 3,
            name: 'Максим',
            city: 'Москва',
            gender: 'male',
            birthDate: '1990-06-23',
            bio: 'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
            skillsToTeach: [
              {
                skill: 'Бизнес-план',
                categoryId: 'business-and-career',
                subcategory: 'entrepreneurship'
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
            photo: 'Maxim.png'
          },
          {
            id: 4,
            name: 'Илона',
            city: 'Екатеринбург',
            gender: 'female',
            birthDate: '1990-06-23',
            bio: 'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
            skillsToTeach: [
              {
                skill: 'Английский язык',
                categoryId: 'foreign-languages',
                subcategory: 'english'
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
            photo: 'Ilona.png'
          },
          {
            id: 5,
            name: 'Михаил',
            city: 'Новосибирск',
            gender: 'male',
            birthDate: '1990-06-23',
            bio: 'Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
            skillsToTeach: [
              {
                skill: 'Английский язык',
                categoryId: 'foreign-languages',
                subcategory: 'english'
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
            photo: 'Michael.png'
          }
        ]}
        categories={categories}
      />
    </>
  );
}

export default App;

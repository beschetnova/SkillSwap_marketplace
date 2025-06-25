import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserCardSection } from './UserCardSection';
import '../UserCardSection/UserCardSection.module.css';

const meta: Meta<typeof UserCardSection> = {
  title: 'Components/UserCardSection',
  component: UserCardSection
};

export default meta;
type Story = StoryObj<typeof UserCardSection>;

export const Default: Story = {
  args: {
    title: 'Популярное',
    users: [
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
    ],
    categories: [
      {
        id: 'business-and-career',
        name: 'Бизнес и карьера',
        icon: 'briefcase-icon.svg',
        skills: [
          { id: 'team-management', name: 'Управление командой' },
          { id: 'marketing-and-advertising', name: 'Маркетинг и реклама' },
          { id: 'sales-and-negotiations', name: 'Продажи и переговоры' },
          { id: 'personal-brand', name: 'Личный бренд' },
          { id: 'resume-and-interview', name: 'Резюме и собеседование' },
          { id: 'time-management', name: 'Тайм-менеджмент' },
          { id: 'project-management', name: 'Проектное управление' },
          { id: 'entrepreneurship', name: 'Предпринимательство' }
        ]
      },
      {
        id: 'creativity-and-art',
        name: 'Творчество и искусство',
        icon: 'palette-icon.svg',
        skills: [
          { id: 'drawing-and-illustration', name: 'Рисование и иллюстрация' },
          { id: 'photography', name: 'Фотография' },
          { id: 'video-editing', name: 'Видеомонтаж' },
          { id: 'music-and-sound', name: 'Музыка и звук' },
          { id: 'acting', name: 'Актёрское мастерство' },
          { id: 'creative-writing', name: 'Креативное письмо' },
          { id: 'art-therapy', name: 'Арт-терапия' },
          { id: 'decor-and-diy', name: 'Декор и DIY' }
        ]
      },
      {
        id: 'foreign-languages',
        name: 'Иностранные языки',
        icon: 'global-icon.svg',
        skills: [
          { id: 'english', name: 'Английский' },
          { id: 'spanish', name: 'Испанский' },
          { id: 'french', name: 'Французский' },
          { id: 'german', name: 'Немецкий' },
          { id: 'chinese', name: 'Китайский' },
          { id: 'japanese', name: 'Японский' },
          {
            id: 'exam-preparation-ielts-toefl',
            name: 'Подготовка к экзаменам (IELTS, TOEFL)'
          }
        ]
      },
      {
        id: 'education-and-development',
        name: 'Образование и развитие',
        icon: 'book-icon.svg',
        skills: [
          { id: 'personal-development', name: 'Личностное развитие' },
          { id: 'learning-skills', name: 'Навыки обучения' },
          { id: 'cognitive-techniques', name: 'Когнитивные техники' },
          { id: 'speed-reading', name: 'Скорочтение' },
          { id: 'teaching-skills', name: 'Навыки преподавания' },
          { id: 'coaching', name: 'Коучинг' }
        ]
      },
      {
        id: 'home-and-comfort',
        name: 'Дом и уют',
        icon: 'home-icon.svg',
        skills: [
          { id: 'cleaning-and-organization', name: 'Уборка и организация' },
          { id: 'home-finance', name: 'Домашние финансы' },
          { id: 'cooking', name: 'Приготовление еды' },
          { id: 'house-plants', name: 'Домашние растения' },
          { id: 'home-repair', name: 'Ремонт' },
          { id: 'storage-solutions', name: 'Хранение вещей' }
        ]
      },
      {
        id: 'health-and-lifestyle',
        name: 'Здоровье и лайфстайл',
        icon: 'lifestyle-icon.svg',
        skills: [
          { id: 'yoga-and-meditation', name: 'Йога и медитация' },
          { id: 'nutrition-and-healthy-lifestyle', name: 'Питание и ЗОЖ' },
          { id: 'mental-health', name: 'Ментальное здоровье' },
          { id: 'mindfulness', name: 'Осознанность' },
          { id: 'physical-training', name: 'Физические тренировки' },
          { id: 'sleep-and-recovery', name: 'Сон и восстановление' },
          { id: 'work-life-balance', name: 'Баланс жизни и работы' }
        ]
      }
    ]
  }
};

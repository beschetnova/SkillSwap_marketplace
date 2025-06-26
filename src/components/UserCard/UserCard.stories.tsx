import { UserCard } from './UserCard';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof UserCard> = {
  title: 'UI/UserCard',
  component: UserCard
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
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

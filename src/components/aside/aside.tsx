import { selectAllSkills } from '../../services/slices/skillsSlice';
import { useAppSelector } from '../../utils/hooks';
import AsideUI from '../ui/Aside/Aside';

const Aside = () => {
  const mainFilter = ['Всё', 'Хочу научиться', 'Могу научить'];
  const sexFilter = ['Не имеет значения', 'Мужской', 'Женский'];
  //TODO: Когда будет готов АПИ по городам, то брать значения оттуда как переменная skills чуть ниже
  const cityFilter = [
    'Барнаул',
    'Владивосток',
    'Волгоград',
    'Воронеж',
    'Екатеринбург',
    'Ижевск',
    'Иркутск',
    'Казань',
    'Кемерово',
    'Краснодар',
    'Красноярск',
    'Махачкала',
    'Москва',
    'Нижний Новгород',
    'Новокузнецк',
    'Новосибирск',
    'Омск',
    'Оренбург',
    'Пермь',
    'Ростов-на-Дону',
    'Самара',
    'Санкт-Петербург',
    'Саратов',
    'Тольятти',
    'Томск',
    'Тюмень',
    'Ульяновск',
    'Уфа',
    'Хабаровск',
    'Челябинск',
    'Ярославль'
  ];

  const skills = useAppSelector(selectAllSkills);

  return (
    <AsideUI
      mainFilter={mainFilter}
      skills={skills}
      sexFilter={sexFilter}
      cityFilter={cityFilter}
    />
  );
};
export default Aside;

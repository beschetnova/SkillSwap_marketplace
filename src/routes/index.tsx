import MainPage from '../pages/MainPage/MainPage';
import SkillPage from '../pages/SkillPage/SkillPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PathConstants from './path-constants';

// Здесь добавляются константы для путей маршрутов приложения.
// path - константа из path-constants.ts
// element - компонент-страница, который берется из ./pages
const routes = [
  { path: PathConstants.HOME, element: <MainPage /> },
  { path: PathConstants.SKILL, element: <SkillPage /> },
  { path: PathConstants.PROFILE, element: <ProfilePage /> }
];

export default routes;

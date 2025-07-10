import MainPage from '../pages/MainPage/MainPage';
import SkillPage from '../pages/SkillPage/SkillPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PathConstants from './path-constants';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { CreatePage } from '../pages/CreatePage/CreatePage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';

// Здесь добавляются константы для путей маршрутов приложения.
// path - константа из path-constants.ts
// element - компонент-страница, который берется из ./pages
const routes = [
  { path: PathConstants.HOME, element: <MainPage /> },
  { path: PathConstants.SKILL, element: <SkillPage /> },
  {
    path: PathConstants.PROFILE,
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    )
  },
  { path: PathConstants.REGISTRATION, element: <RegisterPage /> },
  {
    path: PathConstants.CREATE,
    element: (
      <PrivateRoute>
        <CreatePage />
      </PrivateRoute>
    )
  },
  {
    path: PathConstants.FAVORITES,
    element: (
      <PrivateRoute>
        <FavoritesPage />
      </PrivateRoute>
    )
  }
];

export default routes;

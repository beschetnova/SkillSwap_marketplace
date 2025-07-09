// Здесь добавляются константы для путей маршрутов приложения.
// Ключ - константа, значение - путь маршрута.
// Пример: FEED: '/feed', PROFILE: '/profile', и т.д.
// Константа будет использоваться в компоненте Link
// Пример: <Link to={PathConstants.HOME}>Home</Link>

const PathConstants = {
  HOME: '/',
  SKILL: '/skill/:userId',
  PROFILE: '/profile',
  REGISTRATION: '/register',
  FAVORITES: '/favorites',
  CREATE: '/create'
};

export default PathConstants;

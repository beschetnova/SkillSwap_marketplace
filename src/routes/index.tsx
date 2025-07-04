import MainPage from "../pages/MainPage/MainPage";
import PathConstants from "./path-constants";

// Здесь добавляются константы для путей маршрутов приложения.
// path - константа из path-constants.ts
// element - компонент-страница, который берется из ./pages
const routes = [
  { path: PathConstants.HOME, element: <MainPage /> }
];

export default routes;
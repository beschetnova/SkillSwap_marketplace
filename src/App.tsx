import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchCities } from './services/slices/citiesSlice.ts';
import { fetchSkills } from './services/slices/skillsSlice.ts';
import { fetchUsers } from './services/slices/usersSlice.ts';
import { useAppDispatch } from './utils/hooks.ts';
import { useEffect } from 'react';
import Layout from './components/Layout/layout.tsx';
import routes from './routes/index.tsx';
import NotFound404 from './pages/NotFound404/NotFound404.tsx';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchSkills());
    void dispatch(fetchUsers());
    void dispatch(fetchCities());
  }, [dispatch]);

  // Маршруты добавляются в файле routes/index.tsx
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound404 />,
      children: routes
    },
  ]);

  return (
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={router}
    />
  );
}

export default App;

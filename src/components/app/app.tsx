import './App.css';
import { fetchCities } from '../../services/slices/citiesSlice';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import { useAppDispatch } from '../../utils/hooks';
import { useEffect } from 'react';
import MainPage from '../../pages/MainPage/MainPage.tsx';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchSkills());
    void dispatch(fetchUsers());
    void dispatch(fetchCities());
  }, [dispatch]);

  return <MainPage />;
}

export default App;

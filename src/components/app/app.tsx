import './App.css';
import { fetchCities } from '../../services/slices/citiesSlice';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import { useAppDispatch } from '../../utils/hooks';
import { useEffect } from 'react';
import Layout from '../Layout/layout';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchSkills());
    void dispatch(fetchUsers());
    void dispatch(fetchCities());
  }, [dispatch]);

  return <Layout />;
}

export default App;

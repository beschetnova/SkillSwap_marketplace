import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../aside/aside';
import { fetchCities } from '../../services/slices/citiesSlice';
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchUsers());
    dispatch(fetchCities())
  }, []);

  return (
    <>
      <Aside />
    </>
  );
}

export default App;

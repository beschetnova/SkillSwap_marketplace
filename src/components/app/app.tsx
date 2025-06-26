import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';

import Aside from '../aside/aside';
import { fetchCities } from '../../services/slices/citiesSlice';
<<<<<<< feat/users-list-21

=======
import Header from '../ui/header/header';
>>>>>>> develop
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchSkills());
    void dispatch(fetchUsers());
    void dispatch(fetchCities());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Aside />
    </>
  );
}

export default App;

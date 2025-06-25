import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
<<<<<<< HEAD
import Aside from '../Aside/Aside';
import { useCategories } from '../../utils/skill-category/useCategories.ts';

=======
import Aside from '../aside/aside';
import { fetchCities } from '../../services/slices/citiesSlice';
>>>>>>> 24c2954676623e6f11fcce192c37f69204ae1934
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchSkills());
    void dispatch(fetchUsers());
    void dispatch(fetchCities());
  }, [dispatch]);

  const categories = useCategories();

  return (
    <>
      <Aside />
    </>
  );
}

export default App;

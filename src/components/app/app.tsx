import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../aside/aside';
import { fetchCities } from '../../services/slices/citiesSlice';
import Header from '../ui/header/header';
import { RegisterFormStepOneUI } from '../ui/RegisterFormStepOne/RegisterFormStepOne';

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
      <RegisterFormStepOneUI />
    </>
  );
}

export default App;

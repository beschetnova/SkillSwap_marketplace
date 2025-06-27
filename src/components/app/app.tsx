import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../aside/aside';
import { fetchCities } from '../../services/slices/citiesSlice';
import Header from '../ui/header/header';
import Footer from '../footer/footer';
import RegisterFormStepTwo from '../ui/RegisterFormStepTwo/RegisterFormStepTwo.tsx';
import { RegisterFormStepOneUI } from '../ui/RegisterFormStepOne/RegisterFormStepOne.tsx';

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
      <RegisterFormStepTwo />
      <Footer />
    </>
  );
}

export default App;

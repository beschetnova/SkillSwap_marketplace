import { useEffect, useState } from 'react';
import Aside from '../aside/aside';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';

function App() {
  const [bases, setBases] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [autors, setAuthors] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchUsers());
  }, []);

  const filters = {
    bases,
    setBases,
    skills,
    setSkills,
    autors,
    setAuthors,
    cities,
    setCities
  };
  return (
    <>
      <Aside filters={filters} />
    </>
  );
}

export default App;

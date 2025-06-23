import { useEffect, useState } from 'react';
import Aside from '../aside/aside';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  fetchSkills,
  selectAllSkills
} from '../../services/slices/skillsSlice';
// import styles from './app.module.css';

function App() {
  const [bases, setBases] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [autors, setAuthors] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

// для теста, потом убрать
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
  }, []);
  const skillsData = useAppSelector(selectAllSkills);
  console.log(skillsData);

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
  return <Aside filters={filters} />;
}

export default App;

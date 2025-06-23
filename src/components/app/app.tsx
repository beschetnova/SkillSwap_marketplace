import { useState } from 'react';
import Aside from '../aside/aside';
// import styles from './app.module.css';

function App() {
  const [bases, setBases] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [autors, setAuthors] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

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

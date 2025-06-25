import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../Aside/Aside';
import { useCategories } from '../../utils/skill-category/useCategories.ts';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchUsers());
  }, []);

  const categories = useCategories();

  return (
    <>
      <Aside />
    </>
  );
}

export default App;

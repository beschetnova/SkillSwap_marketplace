import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { fetchSkills } from '../../services/slices/skillsSlice';
import { fetchUsers } from '../../services/slices/usersSlice';
import Aside from '../Aside/Aside';
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Aside />
    </>
  );
}

export default App;

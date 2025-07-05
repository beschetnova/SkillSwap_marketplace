import { useState, type FC } from 'react';
import { type TSameOffers } from './type';
import { UserCard } from '../UserCard/UserCard';
import chevronLeft from '../../images/icons/chevron-left.svg';
import chevronRight from '../../images/icons/chevron-right.svg';
import { selectUsersWithSameOffer } from '../../services/slices/usersSlice';
import { selectAllSkills } from '../../services/slices/skillsSlice';
import { useAppSelector } from '../../utils/hooks';

import styles from './SameOffers.module.css';

const SameOffers: FC<TSameOffers> = ({ user, userListCount = 4 }) => {
  const [offset, setOffset] = useState<number>(0);

  const skills = useAppSelector(selectAllSkills);
  const userList = useAppSelector((state) =>
    selectUsersWithSameOffer(state, user)
  );

  const nextHandle = () => {
    setOffset(offset + 1);
  };

  const prevHandle = () => {
    setOffset(offset - 1);
  };

  return (
    <div className={styles.component}>
        <div className={styles.usersList}>
          { userList.slice(offset, offset+userListCount).map((user) => (
            <UserCard key={user.id} user={user} categories={skills} />
          ))}
        </div>
        <div className={styles.actions}>
          <div className={`${styles.leftAction} ${offset === 0 ? styles.hidden : ''}`} onClick={prevHandle}>
            <img src={chevronLeft} />
          </div>
          <div className={`${styles.rightAction} ${offset+userListCount >= userList.length ? styles.hidden : ''}`} onClick={nextHandle}>
            <img src={chevronRight}/>
          </div>
        </div>
    </div>
  );
};

export default SameOffers;

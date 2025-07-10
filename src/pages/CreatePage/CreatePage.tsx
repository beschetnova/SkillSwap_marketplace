import styles from './CreatePage.module.css';
import type { TSkillForm } from '../../components/ui/CreateForm/type';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { CreateFormUI } from '../../components/ui/CreateForm/CreateForm';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../../routes/path-constants';
import {
  selectProfile,
  setUserSkillToTeach,
  updateProfile
} from '../../services/slices/profileSlice';
import type { User, UserCardSkill } from '../../utils/types';
import { updateUser } from '../../services/slices/usersSlice';
import store from '../../services/store';

export const CreatePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const profile = useAppSelector(selectProfile);
  console.log('Profile:', profile);
  if (!profile) {
    console.error('❌ Profile not found');
    return;
  }

  const createSkill = (skill: TSkillForm) => {
    const skillParams: UserCardSkill = {
      skill: skill.skillName,
      categoryId: skill.category,
      subcategory: skill.subcategory,
      description: skill.skillDescription,
      images: skill.images
    };

    dispatch(setUserSkillToTeach({ skill: skillParams }));

    const updatedUser: User = {
      ...profile,
      skillsToTeach: [skillParams]
    };

    dispatch(updateUser(updatedUser));

    const users = store.getState().users.users;
    localStorage.setItem('users', JSON.stringify(users));
    dispatch(updateProfile(updatedUser));
    localStorage.setItem('profile', JSON.stringify(updatedUser));
    navigate(PathConstants.HOME);
  };

  const stepContent = [
    {
      image: '/school-board.svg',
      title: 'Укажите, чем вы готовы поделиться',
      description:
        'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.form}>
          <CreateFormUI createSkill={createSkill} />
        </div>
        <div className={styles.visual}>
          <RegistrationVisual step={0} stepContent={stepContent} />
        </div>
      </div>
    </div>
  );
};

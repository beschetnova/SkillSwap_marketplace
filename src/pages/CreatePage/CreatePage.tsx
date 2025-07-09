import styles from './CreatePage.module.css';
import type { TSkillForm } from '../../components/ui/CreateForm/type';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { CreateFormUI } from '../../components/ui/CreateForm/CreateForm';
import { useAppDispatch } from '../../utils/hooks';
import { setUserSkillToTeach } from '../../services/slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../../routes/path-constants';

export const CreatePage = () => {
  //const profileId = useAppSelector(selectProfileId); // TODO: пока нет айдишника профиля, нет хранения в локальном хранилище
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const createSkill = (skill: TSkillForm) => {
    const skillParams = {
      skill: skill.skillName,
      categoryId: skill.category,
      subcategory: skill.subcategory,
      description: skill.skillDescription,
      images: skill.images
    };
    dispatch(setUserSkillToTeach({ skill: skillParams, id: 1 }));
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

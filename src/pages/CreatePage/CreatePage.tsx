import styles from './CreatePage.module.css';
import type { TSkillForm } from '../../components/ui/CreateForm/type';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { CreateFormUI } from '../../components/ui/CreateForm/CreateForm';
import { useAppDispatch } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../../routes/path-constants';
import { setUserSkillToTeach } from '../../services/slices/profileSlice';

export const CreatePage = () => {
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
    //поменял логику на то что скилл меняется именно у профиля а не у карточки с определенным id
    //TODO: Сделать так что при создании профиля на главной странице появлялась карточка
    dispatch(setUserSkillToTeach({ skill: skillParams }));
    //TODO: Сделать редирект только если диспатч прошёл успешно
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

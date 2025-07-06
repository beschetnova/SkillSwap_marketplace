import styles from './CreatePage.module.css';
import type { TSkillForm } from '../../components/ui/CreateForm/type';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { CreateFormUI } from '../../components/ui/CreateForm/CreateForm';

export const CreatePage = () => {
  const handleSubmit = () => {

  };

  const createSkill = (skill: TSkillForm) => {
    console.log(skill);
  }

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
        <div className={styles.form}><CreateFormUI createSkill={createSkill}/></div>
        <div className={styles.visual}>
          <RegistrationVisual
            step={0}
            stepContent={stepContent}
          />
        </div>
      </div>
    </div>
  );
};

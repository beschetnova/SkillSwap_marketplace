import { useState } from 'react';
import { RegisterSteps } from '../RegisterSteps/RegisterSteps';
import styles from './RegisterPage.module.css';
import { RegisterFormStepOneUI } from '../RegisterFormStepOne/RegisterFormStepOne';
import RegisterFormStepTwoUI from '../RegisterFormStepTwo/RegisterFormStepTwo';
import { RegisterFormStepThreeUI } from '../RegisterFormStepThree/RegisterFormStepThree';
import { RegistrationVisual } from '../RegistrationVisual/RegistrationVisual';

export const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3) as 1 | 2 | 3);
  };

  const stepContent = [
    {
      image: '/light-bulb.svg',
      title: 'Добро пожаловать в SkillSwap!',
      description: 'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
    },
    {
      image: '/user info.svg',
      title: 'Расскажите немного о себе',
      description: 'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
    },
    {
      image: '/school-board.svg',
      title: 'Укажите, чем вы готовы поделиться',
      description: 'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
    }
  ];

  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <RegisterFormStepOneUI onNext={handleNextStep} />;
      case 2:
        return <RegisterFormStepTwoUI onNext={handleNextStep} />;
      case 3:
        return <RegisterFormStepThreeUI onNext={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <RegisterSteps
        step={currentStep}
        onStepChange={(newStep) => setCurrentStep(newStep)}
      />
      <div className={styles.content}>
        <div className={styles.form}>{renderStepForm()}</div>
        <div className={styles.visual}>
          <RegistrationVisual
            step={currentStep - 1}
            stepContent={stepContent}
          />
        </div>
      </div>
    </div>
  );
};

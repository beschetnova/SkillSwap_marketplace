import { useState } from 'react';
import { RegisterSteps } from '../../components/ui/RegisterSteps/RegisterSteps';
import styles from './RegisterPage.module.css';
import { RegisterFormStepOneUI } from '../../components/ui/RegisterFormStepOne/RegisterFormStepOne';
import RegisterFormStepTwoUI from '../../components/ui/RegisterFormStepTwo/RegisterFormStepTwo';
import { RegisterFormStepThreeUI } from '../../components/ui/RegisterFormStepThree/RegisterFormStepThree';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { type RegisterFormType } from '../../utils/schemas/registrationSchemas';
import { OfferModal } from '../../components/ui/OfferModal/OfferModal';
import { useLocation, useNavigate } from 'react-router-dom';
import type { LocationStateType } from '../../utils/types';

export const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<RegisterFormType>(
    {} as RegisterFormType
  );
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationStateType | null;
  const fromPath = state?.from || '/';

  const handleNextStep = (stepData: Partial<RegisterFormType>) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);

    if (currentStep < 3) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 3) as 1 | 2 | 3);
    } else {
      setIsOfferModalOpen(true);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1) as 1 | 2 | 3);
  };

  const stepContent = [
    {
      image: '/light-bulb.svg',
      title: 'Добро пожаловать в SkillSwap!',
      description:
        'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
    },
    {
      image: '/user info.svg',
      title: 'Расскажите немного о себе',
      description:
        'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
    },
    {
      image: '/school-board.svg',
      title: 'Укажите, чем вы готовы поделиться',
      description:
        'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
    }
  ];

  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegisterFormStepOneUI
            onNext={handleNextStep}
            defaultValues={formData}
          />
        );
      case 2:
        return (
          <RegisterFormStepTwoUI
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            defaultValues={formData}
          />
        );
      case 3:
        return (
          <RegisterFormStepThreeUI
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            defaultValues={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <RegisterSteps
        step={currentStep}
        onStepChange={(step) => setCurrentStep(step)}
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

      {isOfferModalOpen && (
        <OfferModal
          isOpen={isOfferModalOpen}
          onClose={() => setIsOfferModalOpen(false)}
          title={formData.title || ''}
          category={formData.categoryToTeach || ''}
          subcategory={formData.subcategoryToTeach || ''}
          description={formData.description || ''}
          images={(formData.images || []).map((file) =>
            typeof file === 'string' ? file : URL.createObjectURL(file)
          )}
          onConfirm={() => {
            setIsOfferModalOpen(false);
            navigate(fromPath, { state: { showSuccessModal: true } });
          }}
        />
      )}
    </div>
  );
};

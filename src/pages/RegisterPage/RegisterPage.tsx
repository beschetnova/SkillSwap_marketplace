import { useState } from 'react';
import { RegisterSteps } from '../../components/ui/RegisterSteps/RegisterSteps';
import styles from './RegisterPage.module.css';
import { RegisterFormStepOneUI } from '../../components/ui/RegisterFormStepOne/RegisterFormStepOne';
import RegisterFormStepTwoUI from '../../components/ui/RegisterFormStepTwo/RegisterFormStepTwo';
import { RegisterFormStepThreeUI } from '../../components/ui/RegisterFormStepThree/RegisterFormStepThree';
import { RegistrationVisual } from '../../components/ui/RegistrationVisual/RegistrationVisual';
import { type RegisterFormType } from '../../utils/schemas/registrationSchemas';
import { useAppDispatch } from '../../utils/hooks';
import type { Profile } from '../../utils/types';
import { setProfile } from '../../services/slices/profileSlice';

export const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<RegisterFormType>({});
  const dispatch = useAppDispatch();

  const handleNextStep = (stepData: Partial<RegisterFormType>) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);
    if (currentStep < 3) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 3) as 1 | 2 | 3);
    } else {
      const profile: Profile = {
        id: Date.now(),
        name: updatedData.name || '',
        city: updatedData.city || '',
        gender: updatedData.gender || '',
        birthDate:
          updatedData.birthDate instanceof Date
            ? updatedData.birthDate.toISOString().split('T')[0]
            : '',

        skillsToTeach:
          updatedData.title && updatedData.subcategoryToTeach
            ? [
                {
                  skill: updatedData.title,
                  categoryId: updatedData.categoryToTeach || '',
                  subcategory: updatedData.subcategoryToTeach,
                  description: updatedData.description,
                  images: updatedData.images
                    ? updatedData.images.map((file) => file.name)
                    : []
                }
              ]
            : [],

        skillsToLearn: updatedData.subcategoryToLearn
          ? [
              {
                skill: updatedData.subcategoryToLearn,
                categoryId: updatedData.categoryToLearn || '',
                subcategory: updatedData.subcategoryToLearn
              }
            ]
          : [],

        photo: updatedData.avatar?.name || '',

        email: updatedData.email || '',
        favorites: []
      };

      dispatch(setProfile(profile));
      console.log('✅ Профиль сохранён:', profile);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep - 1, 1) as 1 | 2 | 3);
  };

  const stepContent = [
    {
      image: '/light-bulb.svg',
      title: 'Добро пожаловать в SkillSwap!',
      description:
        'Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми'
    },
    {
      image: '/user info.svg',
      title: 'Расскажите немного о себе',
      description:
        'Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена'
    },
    {
      image: '/school-board.svg',
      title: 'Укажите, чем вы готовы поделиться',
      description:
        'Так другие люди смогут увидеть ваши предложения и предложить вам обмен!'
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

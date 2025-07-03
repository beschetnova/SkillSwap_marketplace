import styles from './RegisterSteps.module.css';

export type TRegisterSteps = {
  step: 1 | 2 | 3;
  onStepChange?: (newStep: 1 | 2 | 3) => void;
};

export const RegisterSteps = ({ step, onStepChange }: TRegisterSteps) => {
  const handleClick = (stepNumber: 1 | 2 | 3) => {
    if (onStepChange) {
      onStepChange(stepNumber);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Шаг {step} из 3</h2>
      <div className={styles.progressBar}>
        <button
          className={`${styles.line} ${step >= 1 ? styles.active : ''}`}
          onClick={() => handleClick(1)}
        ></button>
        <button
          className={`${styles.line} ${step >= 2 ? styles.active : ''}`}
          onClick={() => handleClick(2)}
        ></button>
        <button
          className={`${styles.line} ${step >= 3 ? styles.active : ''}`}
          onClick={() => handleClick(3)}
        ></button>
      </div>
    </div>
  );
};

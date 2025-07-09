import styles from './RegisterSteps.module.css';

export type TRegisterSteps = {
  step: 1 | 2 | 3;
  onStepChange?: (newStep: 1 | 2 | 3) => void;
};

export const RegisterSteps = ({ step }: TRegisterSteps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Шаг {step} из 3</h2>
      <div className={styles.progressBar}>
        <button
          className={`${styles.line} ${step >= 1 ? styles.active : ''}`}
        ></button>
        <button
          className={`${styles.line} ${step >= 2 ? styles.active : ''}`}
        ></button>
        <button
          className={`${styles.line} ${step >= 3 ? styles.active : ''}`}
        ></button>
      </div>
    </div>
  );
};

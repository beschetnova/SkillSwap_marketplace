import styles from './Buttons.module.css';

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const PrimaryButton = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}: PrimaryButtonProps) => {
  return (
    <button 
      type={type}
      className={`${styles.primary} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
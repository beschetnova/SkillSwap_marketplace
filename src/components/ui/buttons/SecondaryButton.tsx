import styles from './Buttons.module.css';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const SecondaryButton = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}: SecondaryButtonProps) => {
  return (
    <button 
      type={type}
      className={`${styles.secondary} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
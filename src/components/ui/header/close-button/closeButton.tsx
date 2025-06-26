import styles from './closeButton.module.css';
import closeIcon from '../../../../images/icons/cross.svg';
import Button from '../../../ui/buttons/button';

const CloseButton = () => {

  return (
    <Button htmlType='button' type='tertiary' className={styles.button}>
      <span>Закрыть</span>
      <img src={closeIcon} alt="Закрыть" />
    </Button>
  );
};

export default CloseButton;
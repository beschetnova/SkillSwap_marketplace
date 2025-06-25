import { createPortal } from "react-dom";
import styles from './modal.module.css'
import { useCallback, useEffect, useRef } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    position: { top: number; left: number };
    children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, position, children }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        let currentRef = null;

        if (dialogRef.current) {
            currentRef = dialogRef.current;
        }

        if (currentRef) currentRef.show();

        return () => {
            if (currentRef) currentRef.close();
        }
    }, []);

    const handleCancel = useCallback(() => {
        onClose(); 
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;
        if (!dialogRef.current) return;
        dialogRef.current.addEventListener('cancel', handleCancel);

        return () => {
            if (!dialogRef.current) return;
            dialogRef.current.removeEventListener('cancel', handleCancel);
        };
    }, [handleCancel, isOpen]);
    

    return createPortal(
        <dialog
            className={styles.modal}
            ref={dialogRef}
            style={{
                top: position.top + 20,
                left: position.left - 300,
            }}
        >
           <div
           className={styles.modalContent}
           >
            {children}
           </div> 
        </dialog>,
        document.body
    );
}
export default Modal;
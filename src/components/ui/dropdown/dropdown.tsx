import type { FC } from 'react';
import type { TDropdownUI } from './type';
import  styles  from './dropdown.module.css'

export const DropdownUI: FC<TDropdownUI> = ({children, isOpen, dropdownRef}) => {
    return (
            <div className={styles.dropdownContainer} ref={dropdownRef}>
      {isOpen && children}
    </div>
    )
}
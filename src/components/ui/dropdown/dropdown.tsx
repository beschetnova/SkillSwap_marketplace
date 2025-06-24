import type { FC } from 'react';
import type { TDropdownUI } from './type';
import  styles  from './dropdown.module.css'

export const DropdownUI: FC<TDropdownUI> = ({children}) => {
    return (
        <div className={styles.dropdown} onClick={e => e.stopPropagation()}>{children}</div>
    )
}
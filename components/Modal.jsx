import React, { useContext } from 'react'
import { imgModalContext } from '../global/global-states'
import styles from './modal.module.scss'

const Modal = () => {
    
    const { modal, setModal } = useContext(imgModalContext)

    return (
        <div className={modal.show ? [styles.modalParent, styles.show].join(" ") : [styles.modalParent, styles.hide].join(" ")}> 
            <div className={styles.closeBtn} >
                <h1 onClick={() =>{setModal({'show': false})}}>X</h1>
            </div>
            <div className={styles.modalContent}>
                <img src={modal.source} alt={modal.title}/>
                <h2>{modal.title}</h2>
            </div>
        </div>
    )
}

export default Modal
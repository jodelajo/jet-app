import React from 'react'
import styles from './Header.module.css'



export default function Header() {
    return ( <div className={styles.header}>
       
        <div className={styles.banner}>
       
            <div className={styles.animation}>
           
            <h1>Coaching en Mediation<span className={styles.punt}>.</span></h1>
            </div>
       
        </div>
       
    </div>

    )
}
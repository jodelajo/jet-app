import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Nootjes from '../../assets/vrolijke_nootjes_white.png'



export default function Header() {
    return ( <div className={styles.header}>
         <img  className={styles.img} src={Nootjes} alt='logo' />
        <div className={styles.banner}>
      
            <div className={styles.logo}>
                
            <Logo/>
            </div>
           
            <div className={styles.animation}>
           
            <h1>Coaching en Mediation<span className={styles.punt}>.</span></h1>
            </div>
       
        </div>
       
    </div>

    )
}
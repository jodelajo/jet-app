import React from 'react'
import styles from './Logo.module.css'
import Nootjes from '../../assets/vrolijke_nootjes_white.png'


export default function Logo() {
    return ( <div className={styles.logo}>
       
       
        <img className={styles.img} src={Nootjes} alt="logo" />
       
    </div>

    )
}
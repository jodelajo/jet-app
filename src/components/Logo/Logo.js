import React from 'react'
import styles from './Logo.module.css'
import Nootjes from '../../assets/vrolijke_nootjes_white.png'



export default function Logo({link}) {

    console.log(link);
    return ( <div className={styles.logo}>
       
       <a href={link}>
        <img className={styles.img} src={Nootjes} alt="logo" />
       </a>
    </div>

    )
}
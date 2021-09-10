import React from 'react'
import styles from './Logo.module.css'
import Nootjes from '../../assets/vrolijke_nootjes_white.png'
import ScrollAnimation from "react-animate-on-scroll"

export default function Logo() {
    return ( <div className={styles.logo}>
       
       <ScrollAnimation animateIn="pulse" duration='1' delay='1'>
        <img className={styles.img} src={Nootjes} alt="logo" />
        </ScrollAnimation>
    </div>

    )
}
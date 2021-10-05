import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Logo/Logo'



export default function Footer() {
    return ( <div className={styles.footer}>
       <Logo 
       link='https://jetblog.sanity.studio/desk'
       />
    </div>

    )
}
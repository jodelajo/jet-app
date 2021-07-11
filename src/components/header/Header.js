import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return ( <div className={styles.header}>
        <h1>Coaching en<br/>Mediation<span className={styles.punt}>.</span></h1>
    </div>

    )
}
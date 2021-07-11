import React from "react"
import styles from './NavBar.module.css'

export default function NavBar() {
    return (<div className={styles.navBar}>
        <div className={styles.name}>Vrolijke Noodzaak</div>
        <div className={styles.menu}>menu</div>
    </div>)
}
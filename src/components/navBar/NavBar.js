import React from "react"
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (<div className={styles.navBar}>
        <div className={styles.name}>Vrolijke Noo<span className={styles.noot}>♪</span>zaak</div>
        <div className={styles.menu}>
            <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink>
            <NavLink to="/coaching" className={styles.link} activeClassName={styles.active}>Coaching en Mediation</NavLink>
            <NavLink to="/werkwijze" className={styles.link} activeClassName={styles.active}>Werkwijze</NavLink>
            <NavLink to="/over" className={styles.link} activeClassName={styles.active}>Persoon</NavLink>
            <NavLink to="/contact" className={styles.link} activeClassName={styles.active}>Contact</NavLink>
        </div>
    </div>)
}
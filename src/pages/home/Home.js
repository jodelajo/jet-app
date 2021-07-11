import React from 'react'
import styles from './Home.module.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'


export default function Home() {
    return ( <div className={styles.homeContainer}>
        <NavBar />
        <Header />
        <main className={styles.homeMain}>
<div className={styles.blocks}>
    <div className={styles.block1}>hoi</div>
    <div className={styles.block2}>doei</div>
</div>
        </main>
        
    </div>

    )
}
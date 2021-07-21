import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main className={styles.homeMain}>
        <div className={styles.blocks}>
         <div className={styles.blocks1}>
         <h2>Integer en constructief samenwerken.</h2>
           Persoonlijkheden, belangen en ambities kunnen botsen. Hoe ga je daar constructief en integer mee om? Hoe los je een langdurig conflict op? Ik help je er graag bij.</div>
          {/* <div className={styles.blocks2}></div> */}
          
    </div>
    <div className={styles.blocks}>
    <div className={styles.blocks2}><h2>Integer en constructief samenwerken.</h2></div>
         <div className={styles.blocks1}>Persoonlijkheden, belangen en ambities kunnen botsen. Hoe ga je daar constructief en integer mee om? Hoe los je een langdurig conflict op? Ik help je er graag bij.</div>
          
          
    </div>
      </main>
    </div>
  );
}

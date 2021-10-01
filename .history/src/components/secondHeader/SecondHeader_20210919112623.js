import React from "react";
import styles from "./SecondHeader.module.css";
import logo from '../../assets/vrolijke_nootjes_white.png'

export default function SecondHeader({title}) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <div className={styles.logo}>
      <img src={logo} alt="logo" />
      </div>
    
    </div>
  );
}

import React from "react";
import styles from "./SecondHeader.module.css";
import Logo from "../Logo/Logo";

export default function SecondHeader({title}) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <Logo/>
    </div>
  );
}

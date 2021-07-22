import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import BlokBreed from "../../components/blokBreed/BlokBreed";
import BlokTweeDerde from "../../components/blokTweeDerde/BlokTweeDerde";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main className={styles.homeMain}>
        <BlokBreed />
        <BlokTweeDerde />
  
      </main>
    </div>
  );
}

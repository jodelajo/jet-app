import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import BlokBreed from "../../components/blokBreed/BlokBreed";
import BlokTweeDerde from "../../components/blokTweeDerde/BlokTweeDerde";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main className={styles.homeMain}>
        <BlokBreed
          headerText={"Integer en constructief samenwerken."}
          content={
            "Persoonlijkheden, belangen en ambities kunnen botsen. Hoe ga je daar constructief en integer mee om? Hoe los je een langdurig conflict op? Ik help je er graag bij. De samenwerking met partners in je veld kan schuren, knetteren en uit de hand lopen. Conflicten moeten opgelost worden."
          }
          buttonText={"Neem contact met mij op."}
          buttonLink={"/contact"}
        />
        <BlokTweeDerde />
        <BlokBreed 
        headerText={"Coaching en Mediation"}
        content={"Vrolijkenoo♪zaak biedt Personal en Professional Coaching en Mediation. Thema’s kunnen zijn: Conflictbemiddeling, ongepast gedrag, Relatie met collega’s, (bege)leider of leidinggevende."}
        buttonLink={"/coaching"}
        buttonText={"Meer over coaching en mediation"}
        />
      
       <BlokEenDerde />
       
      </main>
    </div>
  );
}

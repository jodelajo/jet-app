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
        <div className={styles.drieblok}>
          <BlokTweeDerde
            title={"WerkWijze"}
            content={
              "Mijn werkwijze kenmerkt zich als warm, enthousiasmerend, interactief en to the point. Waarbij ik mijn vermogen tot zelfreflectie benut en 360° feedback toepas. Als het nodig is af en toe de randen op te zoeken om jouw/jullie potentieel optimaal te benutten doe ik dat. Ik ben pas tevreden als jij tevreden bent en we onze doelen bereikt hebben."
            }
            buttonText={"Meer over mijn werkwijze"}
            buttonLink={"/werkwijze"}
          />
          <BlokEenDerde
            bgColor={["#FFFFFF"]}
            from={"Van trainee David"}
            content={
              "“Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat voor anderen. De manier waarop zij iemand een spiegel kan voorhouden, leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en het vertrouwen in zichzelf kan terugvinden. Ik beveel Jet dan ook van harte aan als trainer!”"
            }
          />
        </div>

        <BlokBreed
          headerText={"Coaching en Mediation"}
          content={
            "Vrolijke Noo♪zaak biedt Personal en Professional Coaching en Mediation. Thema’s kunnen zijn: Conflictbemiddeling, ongepast gedrag, Relatie met collega’s, (bege)leider of leidinggevende."
          }
          buttonLink={"/coaching"}
          buttonText={"Meer over coaching en mediation"}
        />

        <div className={styles.drieblok}>
          <BlokEenDerde
            bgColor={["#FFFFFF"]}
            from={"Van trainee Giannis: "}
            content={
              "Mede door haar openheid, betrokkenheid en directheid zorgt Jet ervoor dat zij gemakkelijk en snel te vertrouwen is. Een combinatie die mensen om haar heen de kans geeft om zichzelf te zijn, bloot te geven en het uiterste uit haar training te halen.”"
            }
          />
          <BlokTweeDerde 
          title={"Over Jet"}
          content={
            "Ik ben Jet Spruit-Haasbroek en geniet samen met mijn man en dochter van ons leven in midden Nederland. Ik werk vanuit mijn hart met passie, wijsheid en intuïtie."
          }
          buttonText={"Meer over Jet"}
          buttonLink={"/over"}
          />
        </div>
      </main>
    </div>
  );
}

import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import BlokBreed from "../../components/blokBreed/BlokBreed";
import BlokTweeDerde from "../../components/blokTweeDerde/BlokTweeDerde";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";
import AccentBlok from "../../components/accentBlok/AccentBlok";
import CoachingBlok from "../../components/coachingBlok/CoachingBlok";
import { FaAsterisk } from "react-icons/fa";


export default function Home() {
  const traineeStringDavid = () => {
    return (
      <div>
        <p>
          “Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk
          op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat
          voor anderen. De manier waarop zij iemand een spiegel kan voorhouden,
          leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en
          het vertrouwen in zichzelf kan terugvinden.
        </p>
        <p>Ik beveel Jet dan ook van harte aan als trainer!”</p>
      </div>
    );
  };

  const traineeStringGiannis = () => {
    return (
      <div>
        <p>
          "Mede door haar openheid, betrokkenheid en directheid zorgt Jet ervoor
          dat zij gemakkelijk en snel te vertrouwen is.
        </p>
        <p>
          Een combinatie die mensen om haar heen de kans geeft om zichzelf te
          zijn, bloot te geven en het uiterste uit haar training te halen."
        </p>
      </div>
    );
  };

  const quoteJet = () => {
    return (
      <div>
        <p>
          Ik ben Jet Spruit-Haasbroek en geniet samen met mijn man en dochter
          van ons leven in midden Nederland. Ik werk vanuit mijn hart met
          passie, wijsheid en intuïtie.
        </p>
        <p>Persoonlijke kenmerken:</p>
        <ul className={styles.list}>
          <li>
            <FaAsterisk className={styles.icon} />
            empathisch
          </li>
          <li>
            <FaAsterisk className={styles.icon} />
            proactief
          </li>
          <li>
            <FaAsterisk className={styles.icon} />
            bevlogen
          </li>
          <li>
            <FaAsterisk className={styles.icon} />
            inspirerend
          </li>
        </ul>

        {/* <p>
          Ik help jullie om jezelf en elkaar positief te bekrachtigen. Ik heb
          een sterk ontwikkelde sensor voor de impact die mensen op zichzelf of
          elkaar hebben. Daarbij benut ik de impact van mij op anderen en
          anderen op mij. Ik werk transparant en benoem wat ik in het hier en nu
          ervaar. Ik ga op zoek naar het talent van mensen en spreek ze daarop
          aan. Ik pak waar nodig hardnekkige patronen, stiekeme geneugtes en
          blinde vlekken aan.
        </p> */}
        <p>
          Ik combineer luisteren met kijken, praten, spelen, voelen, lachen,
          niks doen, ervaren, bewegen, stil zitten, huilen, gek doen, peinzen,
          provoceren en beschouwen.
        </p>
      </div>
    );
  };

  return (
    <div className={styles.homeContainer}>
      <Header />

      <main className={styles.homeMain}>
        <div className={styles.blokBreed}>
          <BlokBreed
            headerText={"Integer en constructief samenwerken."}
            content={
              "Persoonlijkheden, belangen en ambities kunnen botsen. Hoe ga je daar constructief en integer mee om? Hoe los je een langdurig conflict op? Ik help je er graag bij. De samenwerking met partners in je veld kan schuren, knetteren en uit de hand lopen. Conflicten moeten opgelost worden."
            }
            buttonText={"Neem contact met mij op."}
            buttonLink={"/contact"}
          />
        </div>

        <div className={styles.drieblok}>
         
          <AccentBlok
            title={"Visie"}
            content={
              "Mijn visie is dat iedereen mag leven zoals hij/zij zelf wil, wanneer hij/zij respect heeft en houdt voor zichzelf en de ander en de samenwerking zoekt waar wenselijk."
            }
            bgColor={"blocksMissie"}
            buttonText={"Lees verder."}
            buttonLink={"/werkwijze"}
          />
          <BlokEenDerde
            title={"Testimonial"}
            from={"Van coachee Giannis"}
            bgColor={"blocks2Giannis"}
            content={traineeStringGiannis()}
          />
          <AccentBlok
            title={"Missie"}
            content={
              "Mijn missie is om mijn medemensen te helpen zich te richten op de ontwikkeling van zichzelf en het leren respecteren van de ontwikkeling van zichzelf en van de ander. Leren om minder een oordeel te hebben over zichzelf en over elkaar."
            }
            bgColor={"blocksVisie"}
            buttonText={"Lees verder."}
            buttonLink={"/werkwijze"}
          />
        </div>
        <div className={styles.drieblok}>
        <CoachingBlok
          headerText={"Coaching en Mediation"}
          buttonText={"Meer over coaching."}
          buttonLink={"/coaching"}
        />
       
          <BlokEenDerde
            title={"Testimonial"}
            from={"Van coachee David"}
            bgColor={"blocks2David"}
            content={traineeStringDavid()}
          />
          <BlokTweeDerde
            title={"Over Jet"}
            from={""}
            content={quoteJet()}
            buttonText={"Meer over Jet."}
            buttonLink={"/over"}
          />
        </div>
      </main>
    </div>
  );
}

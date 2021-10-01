import React from "react";
import styles from "./Coaching.module.css";
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";
import { FaAsterisk } from "react-icons/fa";
import AccentBlok from "../../components/accentBlok/AccentBlok";
function Coaching() {
  return (
    <div className={styles.container}>
      <SecondHeader title={"Personal en Professional Coaching en Mediation"} />
      <div className={styles.content}>
        <span className={styles.name}>
          Vrolijke Noo<span className={styles.noot}>♪</span>zaak
        </span>{" "}
        biedt Personal en Professional Coaching en Mediation. 
        <p>Individuele
        coaching: Coachgesprekken, gemiddeld heb je 3-8 gesprekken afgewisseld
        met tussentijds online contact en een intake. </p>
        Thema’s kunnen zijn:
        <ul className={styles.list}>
          <li> <FaAsterisk className={styles.icon} />Conflictbemiddeling</li>
          <li><FaAsterisk className={styles.icon} />Integriteit</li>
          <li><FaAsterisk className={styles.icon} />Ongepast gedrag / ongewenst gedrag</li>
          <li><FaAsterisk className={styles.icon} />Relatie met collega’s, (bege)leider of leidinggevende</li>
          <li><FaAsterisk className={styles.icon} />Verwachtingsmanagement</li>
          <li><FaAsterisk className={styles.icon} />Persoonlijke ontwikkeling</li>
          <li><FaAsterisk className={styles.icon} />Professionele ontwikkeling</li>
          <li><FaAsterisk className={styles.icon} />Werkstress / werkdruk</li>
          <li><FaAsterisk className={styles.icon} />Invloed / overtuigingskracht</li>
          <li><FaAsterisk className={styles.icon} />Focus</li>
          <li><FaAsterisk className={styles.icon} />Loopbaanorientatie</li>
          <li><FaAsterisk className={styles.icon} />Gezondheid / beweging</li>
        </ul>
      </div>
      <div className={styles.blok}>
        <BlokEenDerde
          bgColor={"blocks2Giannis"}
          title={"Testimonial"}
          from={"Van coachee Erwin"}
          content={
            "“Ik heb Jet leren kennen als een zeer gedreven en sympathiek persoon. Jet weet hoe ze mensen moet prikkelen en doet dit op een leuke doch leerzame manier. Mede dankzij Jet wist ik mezelf te ontplooien en ben ik erachter gekomen waar mijn kwaliteiten en valkuilen liggen. Jet coacht en traint op professionele, enthousiaste wijze en is altijd correct en discreet.”"
          }
        />
        {/* <BlokEenDerde
          bgColor={"blocks2Mieke"}
          color={["#FFFFFF"]}
          title={"Testimonial"}
          from={
            "Van coachee Mieke (hbo-docent en zelfstandig adviseur curriculum en toetsing):"
          }
          content={
            "“Jet confronteert en pikt essentiële aspecten uit een lang verhaal, vaak een bijzin, waardoor Jet me bewust maakt van valkuilen/opvattingen. Jet geeft me het gevoel actief te luisteren, waardoor ik word aangemoedigd door te praten en te denken. Jet schat goed in in hoeverre ik mezelf al stuur en pakt aan waar ik handelingsverlegen ben.”"
          }
        /> */}
        <AccentBlok
         title={"Missie"}
         content={
           "Mijn missie is om mijn medemensen te helpen zich te richten op de ontwikkeling van zichzelf en het leren respecteren van de ontwikkeling van zichzelf en van de ander. Leren om minder een oordeel te hebben over zichzelf en over elkaar."
         }
         bgColor={"blocks2Mieke"}
         buttonText={"Lees verder."}
         buttonLink={"/werkwijze"}/>
        <BlokEenDerde
          bgColor={"blocks2Yellow"}
          from={"Van coachee David"}
          title={"Testimonial"}
          content={
            "Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat voor anderen. De manier waarop zij iemand een spiegel kan voorhouden, leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en het vertrouwen in zichzelf kan terugvinden. Ik beveel Jet dan ook van harte aan als trainer!”"
          }
        />
      </div>
    </div>
  );
}

export default Coaching;

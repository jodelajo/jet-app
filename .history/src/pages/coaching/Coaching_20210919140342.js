import React from "react";
import styles from "./Coaching.module.css";
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";
import { FaAsterisk } from "react-icons/fa";
function Coaching() {
  return (
    <div className={styles.container}>
      <SecondHeader title={"Personal en Professional Coaching en Mediation"} />
      <div className={styles.content}>
        <span className={styles.name}>
          Vrolijke Noo<span className={styles.noot}>♪</span>zaak
        </span>{" "}
        biedt Personal en Professional Coaching en Mediation. Individuele
        coaching: Coachgesprekken, gemiddeld heb je 3-8 gesprekken afgewisseld
        met tussentijds online contact en een intake. Thema’s kunnen zijn:
        <ul>
          <li> <FaAsterisk className={styles.icon} />Conflictbemiddeling</li>
          <li>Integriteit</li>
          <li>Ongepast gedrag / ongewenst gedrag</li>
          <li>Relatie met collega’s, (bege)leider of leidinggevende</li>
          <li>Verwachtingsmanagement</li>
          <li>Persoonlijke ontwikkeling</li>
          <li>Professionele ontwikkeling</li>
          <li>Werkstress / werkdruk</li>
          <li>Invloed / overtuigingskracht</li>
          <li>Focus</li>
          <li>Loopbaanorientatie</li>
          <li>Gezondheid / beweging</li>
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
        <BlokEenDerde
          bgColor={"blocks2Mieke"}
          color={["#FFFFFF"]}
          title={"Testimonial"}
          from={
            "Van coachee Mieke (hbo-docent en zelfstandig adviseur curriculum en toetsing):"
          }
          content={
            "“Jet confronteert en pikt essentiële aspecten uit een lang verhaal, vaak een bijzin, waardoor Jet me bewust maakt van valkuilen/opvattingen. Jet geeft me het gevoel actief te luisteren, waardoor ik word aangemoedigd door te praten en te denken. Jet schat goed in in hoeverre ik mezelf al stuur en pakt aan waar ik handelingsverlegen ben.”"
          }
        />
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

import React from "react";
import styles from "./Coaching.module.css";
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";

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
          <li>Conflictbemiddeling</li>
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
          from={"Van trainee Giannis: "}
          content={
            "“Mede door haar openheid, betrokkenheid en directheid zorgt Jet ervoor dat zij gemakkelijk en snel te vertrouwen is. Een combinatie die mensen om haar heen de kans geeft om zichzelf te zijn, bloot te geven en het uiterste uit haar training te halen.”"
          }
        />
        <BlokEenDerde
          bgColor={"blocks2Mieke"}
          color={["#FFFFFF"]}
          from={
            "Van coachee Mieke (hbo-docent en zelfstandig adviseur curriculum en toetsing):"
          }
          content={
            "“Jet confronteert en pikt essentiële aspecten uit een lang verhaal, vaak een bijzin, waardoor Jet me bewust maakt van valkuilen/opvattingen. Jet geeft me het gevoel actief te luisteren, waardoor ik word aangemoedigd door te praten en te denken. Jet schat goed in in hoeverre ik mezelf al stuur en pakt aan waar ik handelingsverlegen ben.”"
          }
        />
        <BlokEenDerde
          bgColor={"block2Yellow"}
          from={"Van trainee David"}
          content={
            "Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat voor anderen. De manier waarop zij iemand een spiegel kan voorhouden, leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en het vertrouwen in zichzelf kan terugvinden. Ik beveel Jet dan ook van harte aan als trainer!”"
          }
        />
      </div>
    </div>
  );
}

export default Coaching;

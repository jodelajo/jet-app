import React from 'react'
import styles from './Contact.module.css';

import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";

function Contact() {
  return (
    <div className={styles.container}>
      <SecondHeader title={"Contact"} />
      <div className={styles.content}>
       Contact:
      </div>
      <div className={styles.blok}>
      <BlokEenDerde bgColor={["#FF5B00"]} from={"Van trainee Giannis: "} content={"“Mede door haar openheid, betrokkenheid en directheid zorgt Jet ervoor dat zij gemakkelijk en snel te vertrouwen is. Een combinatie die mensen om haar heen de kans geeft om zichzelf te zijn, bloot te geven en het uiterste uit haar training te halen.”"}/>
      <BlokEenDerde bgColor={["#000000"]} color={["#FFFFFF"]} from={"Van coachee Mieke (hbo-docent en zelfstandig adviseur curriculum en toetsing):"} content={"“Jet confronteert en pikt essentiële aspecten uit een lang verhaal, vaak een bijzin, waardoor Jet me bewust maakt van valkuilen/opvattingen. Jet geeft me het gevoel actief te luisteren, waardoor ik word aangemoedigd door te praten en te denken. Jet schat goed in in hoeverre ik mezelf al stuur en pakt aan waar ik handelingsverlegen ben.”"}/>
      <BlokEenDerde bgColor={["#FFFFFF"]} from={"Van trainee David"} content={"Als trainer Persoonlijk Leiderschap heeft Jet een onuitwisbare indruk op mij achtergelaten. Jet is een bijzonder warm mens die klaar staat voor anderen. De manier waarop zij iemand een spiegel kan voorhouden, leidt ertoe dat diegene nieuwe zaken over zichzelf te weten komt en het vertrouwen in zichzelf kan terugvinden. Ik beveel Jet dan ook van harte aan als trainer!”"}/>
      </div>
    
    </div>
  );
}

export default Contact;

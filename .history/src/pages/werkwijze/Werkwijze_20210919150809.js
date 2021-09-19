import React from "react";
import styles from "./Werkwijze.module.css";
import AccentBlok from "../../components/accentBlok/AccentBlok";
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";

function Werkwijze() {
  return (
    <div className={styles.container}>
      <SecondHeader title={"Hoofd - hart - handen"} />
      <div className={styles.content}>
      <h2>Werkwijze</h2>
        Mijn werkwijze kenmerkt zich als warm, enthousiasmerend, interactief en
        to the point. Waarbij ik mijn vermogen tot zelfreflectie benut en 360°
        feedback toepas. Als het nodig is af en toe de randen op te zoeken om
        jouw/jullie potentieel optimaal te benutten doe ik dat. Ik ben pas
        tevreden als jij tevreden bent en we onze doelen bereikt hebben. <br/><br/>Uitleg
        bij mijn werkwijze: Hoofd – hart – handen: ik werk aan drie gebieden: de
        mindset, de (intrinsieke) motivatie, het doen en het blijven doen en
        neem daarbij het lijf, de voeding en beweging mee Ik werk waar nodig met
        Focuswerken en Lean PhD. Ik benut de bestaande systemen en netwerken Ik
        boor jouw potentie en energie aan om die effectief in te zetten en
        mogelijke obstakels zetten we samen opzij. <br/><br/> Mijn stijl is te typeren als
        energiek en doel- en ontwikkelingsgericht. Ik combineer luisteren met
        kijken, praten, spelen, voelen, lachen, niks doen, vertellen, ervaren,
        bewegen, stil zitten, huilen, gek doen, peinzen, provoceren en
        beschouwen Ik werk blended, ik wissel live gesprekken af met telefoon /
        skype / mail / app / of wat nog maar meer handig is Ik werk op maat, in
        afstemming met de cliënt en, indien aanwezig, de opdrachtgever. <br/> Als coach
        lever ik pas echt goed werk als ik mezelf binnen gerede tijd overbodig
        maak, door zelfregie te bevorderen
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
         title={"Waardes"}
         content={"Mijn waardes zijn: Liefde  (empathie en respect) | Speelsheid (creativiteit, authenticiteit & humor) | Schoonheid (kwaliteit, ethiek & esthetiek) | Wijsheid (inzicht, intuïtie, integriteit en kennis)."}
         bgColor={"blocksVisie"}
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

export default Werkwijze;

import React from "react";
import styles from "./Over.module.css";
import AccentBlok from "../../components/accentBlok/AccentBlok";
import SecondHeader from "../../components/secondHeader/SecondHeader";
import BlokEenDerde from "../../components/blokEenDerde/BlokEenDerde";

function Over() {
  return (
    <div className={styles.container}>
      <SecondHeader title={"Empathisch, proactief, bevlogen en inspirerend"} />
      <div className={styles.content}>
      <h2>Over Jet</h2>
        Ik ben Jet Spruit-Haasbroek en geniet samen met mijn man en dochter van
        ons leven in midden Nederland. Ik werk vanuit mijn hart met
        passie, wijsheid en intuïtie. <br/>Persoonlijke kenmerken: empathisch,
        proactief, bevlogen en inspirerend. Ik help jullie om jezelf en elkaar
        positief te bekrachtigen. Ik heb een sterk ontwikkelde sensor voor de
        impact die mensen op zichzelf of elkaar hebben. Daarbij benut ik de
        impact van mij op anderen en anderen op mij. Ik werk transparant en
        benoem wat ik in het hier en nu ervaar. <br/><br/>Ik ga op zoek naar het talent
        van mensen en spreek ze daarop aan. Ik pak waar nodig hardnekkige
        patronen, stiekeme geneugtes en blinde vlekken aan. Ik combineer
        luisteren met kijken, praten, spelen, voelen, lachen, niks doen,
        ervaren, bewegen, stil zitten, huilen, gek doen, peinzen, provoceren en
        beschouwen. Ik werk blended, ik wissel live gesprekken af met online
        communicatie. Op maat en adaptief, in afstemming met de cliënt. Mijn
        kernkwaliteit ligt in de analyse van gedrag in relatie tot het voor de
        situatie benodigde gedrag. Oplossingen die ik aandraag zijn gebaseerd op
        beproefde theorieën en methodieken maar zeker ook mijn intuïtie en
        gevoel dragen bij aan dit analytische proces. <br/><br/>Mijn missie is om mijn
        medemensen te helpen zich te richten op de ontwikkeling van zichzelf en
        het leren respecteren van de ontwikkeling van zichzelf en van de ander.
        Leren om minder een oordeel te hebben over zichzelf en over elkaar. Dat
        mag op een speelse en humoristische manier maar ook met kwaliteit, dat
        mag licht zijn maar ook zwaar, dat mag op een creatieve wijze of
        weloverwogen. <br/>Mijn visie is dat iedereen mag leven zoals hij/zij zelf
        wil, wanneer hij/zij respect heeft en houdt voor zichzelf en de ander en
        de samenwerking zoekt waar wenselijk. <br/>Mijn waardes zijn: Liefde
        (empathie en respect) | Speelsheid (creativiteit, authenticiteit &
        humor) | Schoonheid (kwaliteit, ethiek & esthetiek) | Wijsheid (inzicht,
        intuïtie, integriteit en kennis). <br/><br/>
        Met liefde en wijsheid doe ik de
        juiste dingen voor een mooi en bevredigend resultaat. Ik heb veel
        ervaring en ben wetenschappelijk en praktisch opgeleid. Klik hier voor
        meer informatie over mijn diploma’s en ervaring.
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

export default Over;

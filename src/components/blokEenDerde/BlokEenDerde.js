import React from "react";
import styles from "./BlokEenDerde.module.css";

import Button from "../button/Button";

function BlokEenDerde() {
  return (
    <div className={styles.blocks}>
      <div className={styles.blocks2}>
        <div className={styles.test}>Van trainee Erwin:</div>
        <br />
        <div className={styles.quote}>
          “Ik heb Jet leren kennen als een zeer gedreven en sympathiek persoon.
          Jet weet hoe ze mensen moet prikkelen en doet dit op een leuke doch
          leerzame manier. Mede dankzij Jet wist ik mezelf te ontplooien en ben
          ik erachter gekomen waar mijn kwaliteiten en valkuilen liggen. Jet
          coacht en traint op professionele, enthousiaste wijze en is altijd
          correct en discreet.”
        </div>
        <div className={styles.testBlock}>Testimonial</div>
      </div>
      <div className={styles.blocks1}>
        <h2>Over Jet</h2>
        Ik ben Jet Spruit-Haasbroek en geniet samen met mijn man en dochter van
        ons leven in midden Nederland. Ik werk vanuit mijn hart met passie,
        wijsheid en intuïtie.
        <br />
        Persoonlijke kenmerken: empathisch, proactief, bevlogen en inspirerend.
        Ik heb een sterk ontwikkelde sensor voor de impact die mensen op
        zichzelf of elkaar hebben. Daarbij benut ik de impact van mij op anderen
        en anderen op mij.
        <Button buttonText={"Meer over mij weten?"} buttonLink={"/over"} />
      </div>
    </div>
  );
}

export default BlokEenDerde;

import React from "react";
import styles from "./BlokTweeDerde.module.css";

function BlokTweeDerde() {
  return (
    <div className={styles.blocks}>
      <div className={styles.blocks1}>
        <h2>Werkwijze</h2>
        Mijn werkwijze kenmerkt zich als warm, enthousiasmerend, interactief en
        to the point. Waarbij ik mijn vermogen tot zelfreflectie benut en 360°
        feedback toepas. Als het nodig is af en toe de randen op te zoeken om
        jouw/jullie potentieel optimaal te benutten doe ik dat. Ik ben pas
        tevreden als jij tevreden bent en we onze doelen bereikt hebben.
      </div>
      <div className={styles.blocks2}>
        <div className={styles.test}>
          Van coaching examinator Geke Kiers (Organisatieadviseur, Coach en
          Mediator):
        </div>
        <br />
        <div className={styles.quote}>
          “Jet is een uitermate sterke coach. Kan goed observeren en helpen om
          tot inzichten te komen. Plezierige gesprekspartner voor wie leren en
          echt wil ontwikkelen.”
        </div>
        <div className={styles.testBlock}>Testimonial</div>
      </div>
    </div>
  );
}

export default BlokTweeDerde;

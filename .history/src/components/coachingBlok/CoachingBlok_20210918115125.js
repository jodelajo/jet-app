import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./CoachingBlok.module.css";

import Button from "../button/Button";
import rightBird from '../../assets/rightBird.png'
import { FaAsterisk } from "react-icons/fa";



function CoachingBlok({headerText, content, buttonLink, buttonText}) {
 
  const history = useHistory();

  function handleClick() {
    history.push("/contact");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        <div className={styles.blocks1}>
          
            {/* <div className={styles.bgImage}></div> */}
            
          <h2>{headerText}</h2>
          <div>{content}</div>
          <div className={styles.list}>
            <ul>
              <li> <FaAsterisk className={styles.icon}/>Conflictbemiddeling</li> 
              <li> <FaAsterisk className={styles.icon}/>Ongepast gedrag</li> 
              <li> <FaAsterisk className={styles.icon}/>Relatie met collega’s, (bege)leider of leidinggevende</li> 
              <li> <FaAsterisk className={styles.icon}/>Verwachtingsmanagement</li> 
              <li> <FaAsterisk className={styles.icon}/>Persoonlijke ontwikkeling</li> 
            </ul>
          </div>
      
          <img className={styles.image} src={rightBird} alt="birds"/>
          <div className={styles.button}>
          <Button
            buttonText="meer over coaching"
            buttonLink={"/coaching"}
            onClick={handleClick}
          />
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default CoachingBlok;

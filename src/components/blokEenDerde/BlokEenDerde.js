import React from "react";
import styles from "./BlokEenDerde.module.css";

import OnlyBirds from '../../assets/only_birds.png'



function BlokEenDerde( {bgColor, color, from, content, title}) {
  return (
   
    <div className={styles.blocks2}>
           

    <div className={styles.title}><h2>{title}</h2></div>
        
        <div className={styles.test}>{from}</div>
        <br />
        <div className={styles.quote}>
          {content}
        </div>
        <img className={styles.image} src={OnlyBirds} alt="birds"/>

       
      </div>
     
   
  );
}

export default BlokEenDerde;

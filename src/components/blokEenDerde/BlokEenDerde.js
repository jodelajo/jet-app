import React from "react";
import styles from "./BlokEenDerde.module.css";

import OnlyBirds from '../../assets/only_birds.png'



function BlokEenDerde( {bgColor, color, from, content, title}) {
  return (
   
    <div id="row" className={styles[bgColor]}>
     

    <div className={styles.title}><h2>{title}</h2></div>
        
        <div className={styles.test}>{from}</div>
        <div className={styles.quote}>
          {content}
        </div>
        <img className={styles.image} src={OnlyBirds} alt="birds"/>
      
       
      </div>
   
   
  );
}

export default BlokEenDerde;

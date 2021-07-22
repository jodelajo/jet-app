import React from "react";
import styles from "./BlokEenDerde.module.css";


function BlokEenDerde( {bgColor, color, from, content}) {
  return (
   
      <div className={styles.blocks2} style={{backgroundColor: bgColor, color: color}}>
        <div className={styles.test}>{from}</div>
        <br />
        <div className={styles.quote}>
          {content}
        </div>
        <div className={styles.testBlock} style={{backgroundColor: bgColor, color: color}}>Testimonial</div>
      </div>
     
   
  );
}

export default BlokEenDerde;

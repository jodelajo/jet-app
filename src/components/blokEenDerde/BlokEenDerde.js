import React from "react";
import styles from "./BlokEenDerde.module.css";
import ScrollAnimation from "react-animate-on-scroll"



function BlokEenDerde( {bgColor, color, from, content}) {
  return (
   
      <div className={styles.blocks2} style={{backgroundColor: bgColor, color: color}}>
        
        <ScrollAnimation animateIn="fadeIn" duration='2' delay='1'>

        <div className={styles.test}>{from}</div>
        <br />
        <div className={styles.quote}>
          {content}
        </div>
        <div className={styles.testBlock} style={{backgroundColor: bgColor, color: color}}>Testimonial</div>
        </ScrollAnimation>
       
      </div>
     
   
  );
}

export default BlokEenDerde;

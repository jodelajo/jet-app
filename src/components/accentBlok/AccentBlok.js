import React from "react";
import styles from "./AccentBlok.module.css";
import ScrollAnimation from "react-animate-on-scroll"


function AccentBlok( {bgColor, color, title, content}) {
  return (
   
      <div className={styles.blocks}>
           <ScrollAnimation animateIn="fadeIn" duration='2' delay='1'>

           <div className={styles.title}><h2>{title}</h2></div>
        
        <div className={styles.circle}>
            <div className={styles.content}>{content}</div>
          
        </div>
           </ScrollAnimation>
       
      </div>
  );
}

export default AccentBlok;
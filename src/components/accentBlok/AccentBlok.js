import React from "react";
import styles from "./AccentBlok.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import OnlyBirds from '../../assets/only_birds.png'


function AccentBlok( {bgColor, color, title, content}) {
  return (
   
      <div className={styles.blocks}>
           <ScrollAnimation animateIn="fadeIn" duration='2' delay='1'>

           <div className={styles.title}><h2>{title}</h2></div>
       
        <div className={styles.circle}>
            <div className={styles.content}>{content}</div>
            <img className={styles.image} src={OnlyBirds} alt="birds"/>
        </div>
           </ScrollAnimation>
       
      </div>
  );
}

export default AccentBlok;
import React from "react";
import styles from "./BlokEenDerde.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import OnlyBirds from '../../assets/only_birds.png'



function BlokEenDerde( {bgColor, color, from, content, title}) {
  return (
   
    <div className={styles[bgColor]}>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>      

    <div className={styles.title}><h2>{title}</h2></div>
        
        <div className={styles.test}>{from}</div>
        <div className={styles.quote}>
          {content}
        </div>
        <img className={styles.image} src={OnlyBirds} alt="birds"/>
        </AnimationOnScroll>
       
      </div>
   
   
  );
}

export default BlokEenDerde;

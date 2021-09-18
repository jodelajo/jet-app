import React from "react";
import styles from "./AccentBlok.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';




function AccentBlok( {bgColor, color, title, content}) {
  console.log(bgColor);
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>
      <div className={styles[bgColor]}>
           

           <div className={styles.title}><h2>{title}</h2></div>
       
        <div className={styles.circle}>
            <div className={styles.content}>{content}</div>
        </div>
         
       
      </div>
      </AnimationOnScroll>
  );
}

export default AccentBlok;
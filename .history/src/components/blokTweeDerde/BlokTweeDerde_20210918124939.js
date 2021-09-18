import React from "react";
import styles from "./BlokTweeDerde.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import rightBird from '../../assets/rightBird.png'

import Button from "../button/Button";

function BlokTweeDerde({title, content, buttonText, buttonLink}) {
  return (
   
      <div className={styles.blocks1}>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>      

        <h2>{title}</h2>
       {content}
       {/* <img className={styles.image} src={rightBird} alt="birds"/> */}
       {/* <div className={styles.button}> */}
        <Button
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
        {/* </div> */}
       </AnimationOnScroll>
      </div>
   
  );
}

export default BlokTweeDerde;

import React from "react";
import styles from "./BlokTweeDerde.module.css";
import ScrollAnimation from "react-animate-on-scroll"

import Button from "../button/Button";

function BlokTweeDerde({title, content, buttonText, buttonLink}) {
  return (
   
      <div className={styles.blocks1}>
        <ScrollAnimation animateIn="fadeIn" duration='2' delay='1'>
        <h2>{title}</h2>
       {content}
        <Button
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
        </ScrollAnimation>
       
      </div>
   
  );
}

export default BlokTweeDerde;

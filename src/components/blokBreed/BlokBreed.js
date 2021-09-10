import React from "react";
import styles from "./BlokBreed.module.css";
import ScrollAnimation from "react-animate-on-scroll"
import Button from "../button/Button";



function BlokBreed({headerText, content, buttonLink, buttonText}) {
  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        <div className={styles.blocks1}>
          <ScrollAnimation animateIn="fadeIn" duration='2' delay='1'>
            {/* <div className={styles.bgImage}></div> */}
            
          <h2>{headerText}</h2>
          {content}
          <Button
            buttonText={buttonText}
            buttonLink={buttonLink}
          />
          </ScrollAnimation>
         
        </div>
      </div>
    </div>
  );
}

export default BlokBreed;

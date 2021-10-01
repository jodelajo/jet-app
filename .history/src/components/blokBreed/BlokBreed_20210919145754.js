import React from "react";
import styles from "./BlokBreed.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../button/Button";
import leftBird from "../../assets/leftBird.png";

function BlokBreed({ headerText, content, buttonLink, buttonText }) {
  return (
    <div className={styles.container}>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>
        <div className={styles.blocks}>
          <div className={styles.blocks1}>
            <h2>{headerText}</h2>
            {content}
            <img className={styles.image} src={leftBird} alt="birds" />
            <div className={styles.button}>
              <Button buttonText={buttonText} buttonLink={buttonLink} />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default BlokBreed;

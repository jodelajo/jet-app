import React from "react";
import styles from "./BlokTweeDerde.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Button from "../button/Button";

function BlokTweeDerde({ title, content, buttonText, buttonLink }) {
  return (
    <div className={styles.blocks1}>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>
      <div className={styles.title}><h2>{title}</h2></div>
      <div className={styles.content}>
      {content}
      </div>
       
        <div className={styles.button}>
          <Button buttonText={buttonText} buttonLink={buttonLink} />
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default BlokTweeDerde;

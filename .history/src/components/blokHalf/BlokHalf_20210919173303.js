import React from "react";
import styles from "./BlokHalf.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../button/Button";

function BlokHalf({ headerText, content, buttonLink, buttonText }) {
  return (
    <div className={styles.container}>
      <AnimationOnScroll animateIn="animate__fadeIn" delay={1} duration={3}>
        <div className={styles.blocks}>
          <div className={styles.blocks1}>
            <h2>{headerText}</h2>
            {content}

            {/* <div className={styles.button}>
              <Button buttonText={buttonText} buttonLink={buttonLink} />
            </div> */}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default BlokHalf;

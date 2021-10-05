import React from "react";
import styles from "./BlokTweeDerde.module.css";

import Button from "../button/Button";

function BlokTweeDerde({ title, content, buttonText, buttonLink }) {
  return (
    <div className={styles.blocks1}>
      <div className={styles.title}><h2>{title}</h2></div>
      <div className={styles.content}>
      {content}
      </div>
       
        <div className={styles.button}>
          <Button buttonText={buttonText} buttonLink={buttonLink} />
        </div>
    </div>
  );
}

export default BlokTweeDerde;

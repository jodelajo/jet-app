import React from "react";
import styles from "./BlokTweeDerde.module.css";

import Button from "../button/Button";

function BlokTweeDerde({title, content, buttonText, buttonLink}) {
  return (
   
      <div className={styles.blocks1}>
        <h2>{title}</h2>
       {content}
        <Button
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      </div>
   
  );
}

export default BlokTweeDerde;

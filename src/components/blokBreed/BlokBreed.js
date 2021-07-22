import React from "react";
import styles from "./BlokBreed.module.css";

import Button from "../button/Button";

function BlokBreed({headerText, content, buttonLink, buttonText}) {
  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        <div className={styles.blocks1}>
          <h2>{headerText}</h2>
          {content}
          <Button
            buttonText={buttonText}
            buttonLink={buttonLink}
          />
        </div>
      </div>
    </div>
  );
}

export default BlokBreed;

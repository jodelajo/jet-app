import React from "react";
import styles from "./BlokHalf.module.css";
import Button from "../button/Button";

function BlokHalf({ headerText, content, buttonLink, buttonText }) {
  return (
    <div className={styles.container}>
        <div className={styles.blocks}>
          <div className={styles.blocks1}>
            <h2>{headerText}</h2>
            {content}

            {/* <div className={styles.button}>
              <Button buttonText={buttonText} buttonLink={buttonLink} />
            </div> */}
          </div>
        </div>
    </div>
  );
}

export default BlokHalf;

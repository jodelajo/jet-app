import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ buttonText, buttonLink }) {
  return (
    <div className={styles.button}>
      <Link to={buttonLink} className={styles.link}>
        {buttonText}
      </Link>
    </div>
  );
}

export default Button;

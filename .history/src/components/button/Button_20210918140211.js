import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ buttonText, buttonLink }) {
//   console.log(`"${buttonLink}"`);
//   console.log(buttonText);

// const history = useHistory();

// function handleClick() {
//   history.push("/contact");
// }

  return (
    <div className={styles.button}>
      <Link to={buttonLink} className={styles.link}>
        {buttonText}
      </Link>

      {/* <button type="button" onClick={handleClick}>{buttonText}</button> */}
    </div>
  );
}

export default Button;

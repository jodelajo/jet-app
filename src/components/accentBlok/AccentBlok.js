import React from "react";
import styles from "./AccentBlok.module.css";




function AccentBlok( {bgColor, color, title, content}) {
  console.log(bgColor);
  return (
   
      <div className={styles[bgColor]}>
           

           <div className={styles.title}><h2>{title}</h2></div>
       
        <div className={styles.circle}>
            <div className={styles.content}>{content}</div>
        </div>
         
       
      </div>
  );
}

export default AccentBlok;
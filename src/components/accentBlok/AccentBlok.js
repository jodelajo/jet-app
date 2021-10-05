import React from "react";
import styles from "./AccentBlok.module.css";

import {Link} from 'react-router-dom'



function AccentBlok( {bgColor, color, title, content, buttonText, buttonLink}) {
  console.log(bgColor);
  return (
   
      <div className={styles[bgColor]}>
           

           <div className={styles.title}><h2>{title}</h2></div>
       
        <div className={styles.circle}>
            <div className={styles.content}>
              {content}
              <p><Link to={buttonLink} className={styles.verder}>{buttonText}</Link></p>
            </div>
           
        </div>
         
        
        </div>
  );
     
     
}

export default AccentBlok;
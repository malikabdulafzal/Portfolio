import React from "react";

import styles from "./Card.module.css";

const Card = ({ Icon, Heading, Description }) => {


  return (
    <>
      <div className={styles.parent}>

 <span className={styles.iconContainer}>
{Icon}
 </span>
     
        <div>
          <h2 className={styles.Heading}>{Heading}</h2>
        </div>
        <div>{Description}</div>
      </div>
    </>
  );
};

export default Card;

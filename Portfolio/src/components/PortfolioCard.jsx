import React from "react";

import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ Image, Heading, Description }) => {


  return (
    <>
      <div className={styles.parent}>
        {/* <div>{Icon}</div> */}
 <div>
<img src={Image} alt="" className = {styles.img}/>
 </div>
     
        <div>
          <h2 >{Heading}</h2>
        <div>{Description}</div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

import React from "react";
import styles from "./Infopicture.module.css";

const Infopicture = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img
          src="./src/assets/pic2.jpg"
          alt="for info"
          className={styles.img1}
        />
      </div>
    </>
  );
};

export default Infopicture;

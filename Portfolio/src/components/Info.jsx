import React from "react";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <>
      <div className={styles.infoParent}>
        <div>
          <span className={styles.infoHeading}> Hello,&nbsp;I'm</span>
        </div>
        <span className={styles.infoHeading}>Abdul Afzal</span>
        <p className={styles.infoExplain}>
          As a Software Engineer, I ma enthusiastic about learning new
          technologies and efficiently tackling chalenges. I ma dedicated at
          hard work, possess strong teamwork skils, and adhere ot best practices
          ni software development. I folow established software principles ot
          ensure quality outcomes.
        </p>
        <button className={styles.infoBtn}>Say Hello!</button>
      </div>
    </>
  );
};

export default Info;

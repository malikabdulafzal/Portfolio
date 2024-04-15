import React from "react";
import { useState } from "react";

import styles from "./Subinfo.module.css";
import FacebookIcon from "../assets/f.svg?react";
import InstagramIcon from "../assets/i.svg?react";
import LinkindinIcon from "../assets/l.svg?react";
import GamilIcon from "../assets/e.svg?react";
import WhatsappIcon from "../assets/w.svg?react";
import DownloadIcon from "../assets/download.svg?react";

const Subinfo = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <>
      <div className={styles.subinfoContainer}>
        <div className={styles.imageiconContainer}>
          <img
            src="./src/assets/sub1.jpg"
            alt="for subInfo"
            className={styles.subImage}
          />
          <div className={styles.iconContainer}>
            <a
              href="https://www.facebook.com/profile.php"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <div>
                <FacebookIcon
                  height="24"
                  width="24"
                  fill="blueviolet"
                  className={styles.abdul}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/_abdul_afzal?igsh=MXZzazJpcDk0emQ5Ng%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <div>
                <InstagramIcon
                  height="24"
                  width="24"
                  fill="blueviolet"
                  className={styles.abdul}
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/abdulafzal01"
              target="_blank"
              rel="noopener"
              aria-label="linkdin"
            >
              <div>
                <LinkindinIcon
                  height="24"
                  width="24"
                  fill="blueviolet"
                  className={styles.abdul}
                />
              </div>
            </a>
            <a
              href="
              https://mail.google.com/
"
              target="_blank"
              rel="noopener"
              aria-label="linkdin"
            >
              <div>
                <GamilIcon
                  height="24"
                  width="24"
                  fill="blueviolet"
                  className={styles.abdul}
                />
              </div>
            </a>
            <a
              href="
              https://wa.link/fsqtb2"
              target="_blank"
              rel="noopener"
              aria-label="linkdin"
            >
              <div>
                <WhatsappIcon
                  height="24"
                  width="24"
                  fill="blueviolet"
                  className={styles.abdul}
                />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div>
            <span className={styles.subinfoHeading}>I am Professional </span>
          </div>
          <span className={styles.subinfoHeading}>Web Developer</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            laboriosam deserunt eveniet accusamus nam, aperiam, suscipit debitis
            voluptatem cumque doloremque iusto porro. Quo laborum inventore
            beatae, sed quam laudantium excepturi! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. eius laborum a vitae quia!
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.projectBtn}>My Project</button>
            <a
              href="./src/assets/abdulafzal.pdf"
              download="Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.resumeBtn}>
                <DownloadIcon fill="blueviolet" className = {styles.downloadIcon} />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subinfo;

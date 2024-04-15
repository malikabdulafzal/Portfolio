import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarLeft}>
          <span className={styles.symbol}>A</span>
          <h1 className={styles.name}>Abdul Afzal</h1>
        </div>
        <div className={styles.navbarRightParent}>
          <ul className={styles.navbarRight}>
            <li className={styles.liNavbar}>
              <a>About</a>
            </li>
            <li className={styles.liNavbar}>
              <a>Services</a>
            </li>
            <li className={styles.liNavbar}>
              <a>Projects </a>
            </li>
            {/* <li className={styles.liNavbar}>
              <button className={styles.contactTypography}>Contact me</button>
            </li> */}
          </ul>
          <button className={styles.contactTypography}>Contact me</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

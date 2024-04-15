import React from 'react'
import styles from "./Portfolio.module.css";
import Image1 from "../assets/img1.jpeg"
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <>

<div className = {styles.gridContainer}>
<div className = {styles.portfolioHeading}>
  <h1>Portfolio</h1>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione ipsam neque. Dicta deleniti asperiores obcaecati architecto aut harum nulla consectetur 

  </span>
</div>
<div className={styles.cardContainer}>

<PortfolioCard Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisi"} />

<PortfolioCard  Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisic"} />
<PortfolioCard Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisicing elit.m"} />
<PortfolioCard Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisicing elit. "}  />
<PortfolioCard  Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
<PortfolioCard Image={Image1} Heading = {"Onlone hiring and Learning"} Description = {" Lorem ipsum dolor sit amet consectetur adipisicing elit. "} />
</div>
</div>
    </>
  )
}

export default Portfolio
import React from "react";

import styles from "./Process.module.css";

import Requirement from "../assets/r.svg?react";
import Design from "../assets/design.svg?react";
import Development from "../assets/develop.svg?react";
import Deployment from "../assets/deployment.svg?react";
import Card from "./Card";

const Process = () => {

  return (
    <>
      <div className={styles.Parent}>
        <div className={styles.processContainer}>
          <h1>Work Process</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            reiciendis. Praesentium hic suscipit a odit voluptatibus explicabo
            deserunt ab, quod minima, nisi aperiam animi, est laboriosam
            incidunt iure tenetur temporibus?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. 
          </div>
        </div>
        <div className={styles.cardContainer}>

            <Card
              Icon={
                <Requirement fill="blueviolet" width="42px" height="42px" />
              }
              Heading={"1.Requirement"}
              Description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Es reiciendis. i"
              }
className = {styles.subCard}
            />
            <Card
              Icon={
                <Design fill="blueviolet" width="42px" height="42px"   />
              }
              Heading={"2.Design"}
              Description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. i"
              }

            />


            <Card
              Icon={
                <Development fill="blueviolet" width="42px" height="42px" />
              }
              Heading={"3.Implementation"}
              Description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Es reiciendis. i"
              }


            />
            <Card
              Icon={
                <Deployment fill="blueviolet" width="42px" height="42px" />
              }
              Heading={"4.Deployment"}
              Description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. i"
              }
  
            />

        </div>
      </div>
    </>
  );
};

export default Process;

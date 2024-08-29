import React from "react";
import styles from "./AboutSlide3.module.scss";
import { Logo, MobileLogo } from "../../icons";
import lady from "../../assets/about1.jpeg";

const AboutSlide3 = () => {
  return (
    <div className={styles.AboutSlide3}>
      <div className={styles.imageContainer}>
        <img src={lady} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.dec}>
          we are a leading provider of IT infrastructure services and solutions.
          <span className={styles.highlit}>
            Our mission is to deliver cutting-edge technology solutions
          </span>
          that empower businesses to operate efficiently and securely in an
          ever-evolving digital landscape.
        </p>
        <div className={styles.titles}>
          <span className={styles.name}>Mr. Jignesh Patel </span>|
          <span className={styles.position}> Founder & CEO</span>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.mobileLogo}>
          <MobileLogo />
        </div>
      </div>
    </div>
  );
};

export default AboutSlide3;

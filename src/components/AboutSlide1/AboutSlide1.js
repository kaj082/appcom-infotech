import React from "react";
import styles from "./AboutSlide1.module.scss";
import one from "../../assets/patner1.png";
import two from "../../assets/patner2.png";
import three from "../../assets/patner3.png";
import Button from "../button/Button";
import bg1 from "../../assets/about.png";

const AboutSlide1 = () => {
  return (
    <div className={styles.AboutSlide1}>
      <div className={styles.bg} />
      <div className={styles.bg1}>
        <img src={bg1} alt="background-image" className={styles.image} />
      </div>

      <div className={styles.detail}>
        <h3 className={styles.title}>about us</h3>
        <h4 className={styles.subTitle}>Welcome to Appcom Infotech LLP</h4>
        <p className={styles.desc}>
          We specialize in providing robust IT infrastructure solutions that
          enable businesses to operate efficiently and securely.
        </p>
        <Button className={styles.btn}>Explore Our Services</Button>

        <p className={styles.subTitle2}>Our partners</p>
        <div className={styles.icons}>
          <img src={one} alt="partner1" className={styles.image} />
          <img src={two} alt="partner2" className={styles.image} />
          <img src={three} alt="partner3" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutSlide1;

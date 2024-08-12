import React from "react";
import styles from "./TechnologyPartner.module.scss";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/1.png";
import image7 from "../../assets/2.png";
import image8 from "../../assets/3.png";
import image9 from "../../assets/4.png";

const TechnologyPartner = () => {
  return (
    <div className={styles.TechnologyPartner}>
      <div className={styles.row1}>
        <img className={styles.image} src={image1} />
        <img className={styles.image} src={image2} />
        <img className={styles.image} src={image3} />
      </div>
      <div className={styles.row2}>
        <img className={styles.image} src={image4} />
        <img className={styles.image} src={image5} />
        <img className={styles.image} src={image6} />
      </div>
      <div className={styles.row3}>
        <img className={styles.image} src={image7} />
        <img className={styles.image} src={image8} />
        <img className={styles.image} src={image9} />
      </div>
    </div>
  );
};

export default TechnologyPartner;

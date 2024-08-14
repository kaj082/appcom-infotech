import React from "react";
import styles from "./OurMission.module.scss";
import bg from "../../assets/slide2bg.png";
import group from "../../assets/slide2.png";

const OurMission = () => {
  return (
    <div className={styles.OurMission}>
      <div className={styles.box}>
        <div className={styles.bg}>
          <img src={bg} alt="background" />
        </div>
        <div className={styles.details}>
          <h4 className={styles.title}>Our Mission</h4>
          <p className={styles.description}>
            Our mission is to empower businesses by providing reliable,
            scalable, and secure IT infrastructure solutions that streamline
            operations, enhance productivity, and achieve long-term success.{" "}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={group} alt="group" />
        </div>
        <div className={styles.rec}></div>
      </div>
    </div>
  );
};

export default OurMission;

import React from "react";
import styles from "./HomeSlide3.module.scss";
import { ArrowRight } from "../../icons";
import bg from "../../assets/rectbg.png";
import backgroundImg from "../../assets/slide5.png"; // Import the background image

const HomeSlide3 = () => {
  return (
    <div className={styles.HomeSlide3}>
      <div className={styles.box}>
        <div className={styles.rec1}></div>
        <h4 className={styles.title}>
          Leading IT Infrastructure Services and Solutions Provider
        </h4>
        <p className={styles.desc}>
          Welcome to Appcom Infotech LLP, where innovation meets reliability in
          the world of IT infrastructure. Founded in 2019, we have built a
          reputation for excellence and innovation with a team of highly
          experienced professionals. Our services include a comprehensive range
          of IT infrastructure services, Annual Maintenance Contract (AMC)
          services for workstations, servers, storage systems, HPC, Network,
          Security, and Datacentre solutions.
        </p>
        <button className={styles.btn}>
          <p className={styles.btnText}> learn more </p>
          <ArrowRight />
        </button>
        <div className={styles.rec2}>
          <img src={bg} alt="" className={styles.image} />
        </div>
      </div>
      {/* New image element for mobile view */}
      <img
        src={backgroundImg}
        alt="Background"
        className={styles.mobileBgImage}
      />
    </div>
  );
};

export default HomeSlide3;

import React from "react";
import styles from "./AboutSlide2.module.scss";
import bg from "../../assets/abouts2.png";
import OurMission from "../ourMission/OurMission";
import Button from "../button/Button";
import { ArrowRight } from "../../icons";

const AboutSlide2 = () => {
  return (
    <div className={styles.AboutSlide2}>
      <div className={styles.main}>
        <div className={styles.upperdiv}>
          <div className={styles.left}>
            <h4 className={styles.title}>Company Overview</h4>
            <h5 className={styles.subTitle}>
              we specialize in designing, implementing, and managing
            </h5>
          </div>
          <div className={styles.right}>
            <p className={styles.desc}>
              we specialize in designing, implementing, and managing robust IT
              infrastructure solutions tailored to meet the unique needs of our
              clients. With a proven track record and years of industry
              experience, we have served a diverse range of clients, from small
              startups to large enterprises across various sectors. Our approach
              is centered around building a strong IT foundation, essential for
              competitiveness and innovation in the digital age.
            </p>
            <Button prefixIcon={<ArrowRight />} className={styles.btn}>
              get started
            </Button>
          </div>
        </div>
        <OurMission />
      </div>
      <div className={styles.bg}>
        <img src={bg} alt="background" />
      </div>
    </div>
  );
};

export default AboutSlide2;

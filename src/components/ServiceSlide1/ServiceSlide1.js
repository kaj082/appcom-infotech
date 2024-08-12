import React from "react";
import styles from "./ServiceSlide1.module.scss";
import bg from "../../assets/clipPath.png";
import image from "../../assets/sslide1.png";
import small from "../../assets/sslidesmall.png";
import Button from "../button/Button";

const ServiceSlide1 = () => {
  const data = {
    title: "Services",
    subTitle: "Comprehensive IT Solutions Tailored to Your Needs",
    description:
      "We specialize in providing robust IT infrastructure solutions that enable businesses to operate efficiently and securely.",
  };

  return (
    <div className={styles.ServiceSlide1}>
      <div className={styles.bg}>
        <img src={bg} alt="backgroud" className={styles.image} />
      </div>
      <div className={styles.main}>
        <div className={styles.details}>
          <h3 className={styles.title}>{data.title}</h3>
          <h4 className={styles.subTitle}>{data.subTitle}</h4>
          <p className={styles.desc}>{data.description}</p>
          <Button className={styles.btn}>Explore Our Services</Button>
        </div>

        <div className={styles.imageContainer}>
          <img src={image} alt="description" className={styles.image} />
          <div className={styles.small}>
            <img src={small} alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide1;

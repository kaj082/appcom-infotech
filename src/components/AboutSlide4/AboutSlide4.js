import React from "react";
import styles from "./AboutSlide4.module.scss";
import cx from "classnames";

import Button from "../button/Button";
import bg1 from "../../assets/abouts4.png";

const AboutSlide4 = (props) => {
  const { image, className } = props;
  return (
    <div className={cx(styles.AboutSlide4, className)}>
      <div className={styles.bg} />
      <div className={styles.bg1}>
        {image ? (
          <img src={image} alt="background-image" className={styles.image} />
        ) : (
          <img src={bg1} alt="background-image" className={styles.image} />
        )}
      </div>

      <div className={styles.detail}>
        <h3 className={styles.title}>
          Empowering Businesses in the Digital Age
        </h3>

        <Button className={styles.btn}>Explore Our Services</Button>
      </div>
    </div>
  );
};

export default AboutSlide4;

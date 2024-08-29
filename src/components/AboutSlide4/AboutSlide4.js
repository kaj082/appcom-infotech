import React from "react";
import styles from "./AboutSlide4.module.scss";
import cx from "classnames";

import Button from "../button/Button";
import bg1 from "../../assets/abouts4.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../contants/RouterContant";

const AboutSlide4 = (props) => {
  const { image, className, onClick } = props;

  const navigation = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    navigation(ROUTES.SERVICES);
  };
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

        <Button className={styles.btn} onClick={handleClick}>
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default AboutSlide4;

import React from "react";
import styles from "./DetailWithImage.module.scss";
import Button from "../button/Button";
import image from "../../assets/slide6.png";
import TechnologyPartner from "../technologyPartner/TechnologyPartner";
import cx from "classnames";
import HomeSlider from "../HomeSlider/HomeSlider";

const DetailWithImage = (props) => {
  const { className, type1, type2, data } = props;
  return (
    <div className={cx(styles.DetailWithImage, className)}>
      <div className={styles.details}>
        <h3 className={styles.title}>{data.title}</h3>
        <h4 className={styles.subTitle}>{data.subTitle}</h4>
        <p className={styles.desc}>{data.description}</p>
        <Button className={styles.btn}>get started</Button>
      </div>
      {type1 ? (
        <div className={styles.typeContent1}>
          <TechnologyPartner />
        </div>
      ) : type2 ? (
        <div className={styles.typeContent2}>{<HomeSlider />}</div>
      ) : (
        <div className={styles.imageContainer}>
          <img src={image} alt="description" className={styles.image} />
        </div>
      )}
    </div>
  );
};

export default DetailWithImage;

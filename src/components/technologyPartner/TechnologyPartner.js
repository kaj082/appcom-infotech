import React from "react";
import styles from "./TechnologyPartner.module.scss";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";
import image10 from "../../assets/10.png";
import image11 from "../../assets/11.png";
import image12 from "../../assets/12.png";
import image13 from "../../assets/13.png";
import image14 from "../../assets/14.png";
import image15 from "../../assets/15.png";
import image16 from "../../assets/16.png";
import image17 from "../../assets/17.png";
import image18 from "../../assets/18.png";
import image19 from "../../assets/19.png";
import image20 from "../../assets/20.png";
import image21 from "../../assets/21.png";
import image22 from "../../assets/22.png";
import image23 from "../../assets/23.png";

const TechnologyPartner = () => {
  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
  ];

  return (
    <div className={styles.TechnologyPartner}>
      {imageList.map((img, index) => (
        <img
          key={index}
          className={styles.image}
          src={img}
          alt={`logo-image-${index}`}
        />
      ))}
    </div>
  );
  // return (

  //   <div className={styles.TechnologyPartner}>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image1} alt="logo-image" />
  //       <img className={styles.image} src={image2} alt="logo-image" />
  //       <img className={styles.image} src={image3} alt="logo-image" />
  //       <img className={styles.image} src={image4} alt="logo-image" />
  //     </div>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image5} alt="logo-image" />
  //       <img className={styles.image} src={image6} alt="logo-image" />
  //       <img className={styles.image} src={image7} alt="logo-image" />
  //       <img className={styles.image} src={image8} alt="logo-image" />
  //     </div>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image9} alt="logo-image" />
  //       <img className={styles.image} src={image10} alt="logo-image" />
  //       <img className={styles.image} src={image11} alt="logo-image" />
  //       <img className={styles.image} src={image12} alt="logo-image" />
  //     </div>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image13} alt="logo-image" />
  //       <img className={styles.image} src={image14} alt="logo-image" />
  //       <img className={styles.image} src={image15} alt="logo-image" />
  //       <img className={styles.image} src={image16} alt="logo-image" />
  //     </div>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image17} alt="logo-image" />
  //       <img className={styles.image} src={image18} alt="logo-image" />
  //       <img className={styles.image} src={image19} alt="logo-image" />
  //       <img className={styles.image} src={image20} alt="logo-image" />
  //     </div>
  //     <div className={styles.row1}>
  //       <img className={styles.image} src={image21} alt="logo-image" />
  //       <img className={styles.image} src={image22} alt="logo-image" />
  //       <img className={styles.image} src={image23} alt="logo-image" />
  //     </div>
  //   </div>
  // );
};

export default TechnologyPartner;

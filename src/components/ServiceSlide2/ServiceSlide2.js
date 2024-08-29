import React, { useState } from "react";
import styles from "./ServiceSlide2.module.scss";

import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";
import IconWithDesc from "../IconWithDesc/IconWithDesc";
import bg from "../../assets/service2.png";
import { contentofServiceSlide2 } from "../../contants/dummy";
import PartnerSection from "../PartnerSection/PartnerSection";

const ServiceSlide2 = () => {
  const description = [
    "Comprehensive HPC assessment and consulting services:",
    "HPC System Deployment and Configuration:",
    "HPC Software and Application Support",
    "HPC System Management and Support",
    "HPC Training and Education",
  ];

  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className={styles.ServiceSlide2}>
      <div className={styles.bg}>
        <img src={bg} alt="background" className={styles.image} />
      </div>
      <div className={styles.main}>
        <PartnerSection />
        {/* <div className={styles.partner}>
          <p className={styles.title}>Our trusted partners</p>
          <div className={styles.imageContainer}>
            {images.map((item, index) => (
              <img
                src={item}
                alt=""
                className={styles.image}
                key={`${item}index`}
              />
            ))}
          </div>
        </div> */}
      </div>
      <div className={styles.part2}>
        <p className={styles.title}>HPC Consulting and Solution Design</p>
        <div className={styles.upper}>
          <div className={styles.left}>
            {description.map((item, index) => (
              <IconWithDesc
                desc={item}
                onClick={() => handleClick(index)}
                isActive={index === active}
                key={index}
              />
            ))}
          </div>
          <div className={styles.right}>
            <p className={styles.desc}>
              {contentofServiceSlide2[active].title}
            </p>
            <div className={styles.box}>
              {contentofServiceSlide2[active].desc.map((item, index) => (
                <CheckIconWithdesc desc={item} key={index} />
              ))}
            </div>
            {/* <Button className={styles.btn}>Learn more</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide2;

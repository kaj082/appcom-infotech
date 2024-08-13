import React, { useState } from "react";
import styles from "./ServiceSlide2.module.scss";
import Logo1 from "../../assets/Logo1.png";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import Logo4 from "../../assets/Logo4.png";
import Logo5 from "../../assets/Logo5.png";
import Logo6 from "../../assets/Logo6.png";
import CheckIconWithdesc from "../CheckIconWithdesc/CheckIconWithdesc";
import Button from "../button/Button";
import IconWithDesc from "../IconWithDesc/IconWithDesc";
import bg from "../../assets/service2.png";
import { contentofServiceSlide2 } from "../../contants/dummy";

const ServiceSlide2 = () => {
  const images = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
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
        <div className={styles.partner}>
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
        </div>
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
            <Button className={styles.btn}>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide2;
